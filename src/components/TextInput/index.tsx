import type { InputProps } from '@chakra-ui/react';
import type { ComponentRef, Ref } from 'react';
import { Input } from './components/Input';
import { TextInputContainer } from './components/TextInputContainer';

type TextInputProps = InputProps & {
	isLoading?: boolean;
	ref?: Ref<ComponentRef<'input'>>;
};

export const TextInput: React.FC<TextInputProps> = ({
	prefix,
	maxW,
	maxWidth,
	flex,
	ref,
	...props
}) => (
	<TextInputContainer maxW={maxWidth || maxW} flex={flex}>
		<Input ref={ref} {...props} />
	</TextInputContainer>
);
