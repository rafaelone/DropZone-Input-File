import React, { useState, useMemo } from 'react';
import { FiCamera } from 'react-icons/fi';
import { Container, Input } from './styles';

function InputPage() {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(
    () => (thumbnail ? URL.createObjectURL(thumbnail) : null),
    [thumbnail],
  );

  return (
    <Container hasThumbnail={!!thumbnail}>
      <div>
        <label htmlFor="camera" style={{ backgroundImage: `url(${preview})` }}>
          <FiCamera size={20} />
          <Input
            type="file"
            name="camera"
            id="camera"
            onChange={(event) => setThumbnail(event.target.files[0])}
          />
        </label>
      </div>
    </Container>
  );
}

export default InputPage;
