import{
    FormControl,
    FormLabel,
    Textarea,
    FormErrorMessage,
    
} from '@chakra-ui/react'


export const DescriptionTextArea = ({isValid, value, onChange}) => {
        return(
            <FormControl isInvalid={!isValid}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea
                                name="description"
                                value={value}
                                onChange={onChange} 
                                placeholder="Descrição da receita"
                            />
                            {!isValid ? (
                                <FormErrorMessage as="p">
                                    Mínimo 4 caracteres
                                </FormErrorMessage>
                            ) : undefined}
                        </FormControl>
        )
    }