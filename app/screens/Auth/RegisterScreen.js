import React, { useCallback, useReducer } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import AuthScreenWrapper from '../../../components/AuthScreenWrapper';
import Buttom from '../../../components/Buttom';
import { signup } from '../../../store/actions/auth.action';
import Input from '../../../components/Input';
import { formReducer, FORM_INPUT_UPDATE } from './formReducer';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '', 
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(signup(formState.inputValues.email, formState.inputValues.password));
    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y usuario válido',
        [{ text: 'Ok' }]
      );
    }
  }

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch]);

  return (
    <View style={styles.container}>
    <AuthScreenWrapper
      title="REGISTRO"
      message="¿Ya tienes cuenta?"
      buttonText="Ingresar"
      buttonPath="Login"
    >
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorText="Por favor ingresa un email válido"
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        errorText="La contraseña debe ser mínimo 6 caracteres"
        required
        minLength={6}
        onInputChange={onInputChangeHandler}
      />
      <Buttom
        title="REGISTRARME"
        onPress={handleSignUp}
      />
    </AuthScreenWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7fffd4',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: `#00bfff`,
  },
});

export default RegisterScreen;