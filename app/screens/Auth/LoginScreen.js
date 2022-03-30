import React, { useCallback, useReducer } from 'react';
import { Alert, StyleSheet, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AuthScreenWrapper from '../../../components/AuthScreenWrapper';
import Buttom from './../../../components/Buttom';
import { login } from '../../../store/actions/auth.action';
import Input from '../../../components/Input';
import { formReducer, FORM_INPUT_UPDATE } from './formReducer';

const LoginScreen = () => {
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

  const handleLogIn = () => {
    if (formState.formIsValid) {
      dispatch(login(formState.inputValues.email, formState.inputValues.password));
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
      title="INGRESAR"
      message="¿Aún no tienes cuenta?"
      buttonText="Ir al registro"
      buttonPath="Register"
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
        errorText="Ingrese contraseña"
        required
        onInputChange={onInputChangeHandler}
      />
      <Buttom
        title="INGRESAR"
        onPress={handleLogIn}
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

export default LoginScreen;