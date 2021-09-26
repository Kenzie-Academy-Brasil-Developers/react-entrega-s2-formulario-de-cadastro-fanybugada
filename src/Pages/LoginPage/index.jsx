import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import "./styles.css";

function LoginPage() {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(/^[A-Za-z]+$/, "Seu nome deve conter apenas letras."),
    email: yup.string().required("Campo Obrigatório!").email("Email Inválido!"),
    password: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)(?=.*?[0-9])((?=.*[a-zA-Z])).*$/,
        "Senha Inválida! Sua senha deve conter letras, numeros e no mínimo um (1) caractere especial."
      )
      .min(8, "Mínimo de 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório!")
      .oneOf([yup.ref("password")], "Senha Incorreta!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
    history.push(`/HomePage/${data.name}`);
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit(handleForm)}>
      <div>
        <h1>Acesse sua conta:</h1>
      </div>
      <div>
        <TextField
          label="Nome"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          type="password"
          label="Senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          type="password"
          label="Confirmar senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </div>
      <div>
        <Button
          className="loginButton"
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </div>
    </form>
  );
}
export default LoginPage;
