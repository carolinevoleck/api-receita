import{
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    
} from '@chakra-ui/react'


export const TitleInput = ({isValid, value, onChange}) => {
        return(
            <FormControl isInvalid={!isValid}>
                            <FormLabel>Título</FormLabel>
                            <Input
                                name="title"
                                value={value}
                                onChange={onChange}
                                placeholder="Título"
                            />
                            {!isValid ? (
                                <FormErrorMessage as="p">
                                    Mínimo 4 caracteres
                                </FormErrorMessage>
                            ) : undefined}
                        </FormControl>
        )
    }