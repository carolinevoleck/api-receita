import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box, 
} from '@chakra-ui/react';

export const ImageInput = ({ isValid, value, onChange }) => {
  const [imageLoadError, setImageLoadError] = useState(false);


  const handleImageError = () => {
    setImageLoadError(true);
  };

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Imagem</FormLabel>
      <Input
        name="imageUrl"
        value={value}
        onChange={onChange}
        placeholder="Link para Imagem"
      />
      {imageLoadError ? (
        <Box mt={2}>
          <FormErrorMessage as="p">Erro ao carregar a imagem.</FormErrorMessage>
        </Box>
      ) : undefined}
      {!imageLoadError && !isValid && (
        <FormErrorMessage as="p">URL da imagem inválida.</FormErrorMessage>
      )}
      {!imageLoadError && isValid && (
        <img
          src={value}
          alt="Imagem da receita"
          onError={handleImageError}
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
      )}
    </FormControl>
  );
};
