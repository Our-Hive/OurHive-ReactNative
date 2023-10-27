import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import ActionButton from "../../../components/ActionButton";
import UnderlineText from "../../../components/UnderlineText";

export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      repassword: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/bee.png")}
          style={styles.image}
        />
        <Text style={styles.title}>OUR HIVE</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Controller 
            control={control}
            rules={{
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                />
            )}
            name="email"
        />
        {errors.email && (
          <Text style={styles.alert}>Correo invalido.</Text>
        )}
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Username"
                />
            )}
            name="username"
        />
        {errors.username && (
          <Text style={styles.alert}>Este campo es obligatorio.</Text>
        )}
        <Controller
            control={control}
            rules={{
                required: true,
                minLength: 8,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                placeholder="Password"
                />
            )}
            name="password"
        />
        {errors.password && (
          <Text style={styles.alert}>Este campo es obligatorio.</Text>
        )}
        <Controller
            control={control}
            rules={{
                required: true,
                minLength: 8,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                placeholder="Re-password"
                />
            )}
            name="repassword"
        />
        {errors.repassword && (
          <Text style={styles.alert}>Este campo es obligatorio.</Text>
        )}
        <ActionButton
          title="Registrate"
          onPress={handleSubmit(onSubmit)}/>
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "#EEEEEE", fontSize: 20 }}>
          ¿Ya tienes una cuenta?
        </Text>
        <UnderlineText title="Iniciar Sesión" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A1C27",
  },
  header: {
    position: "absolute",
    top: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FFF500",
    marginBottom: 10,
  },
  bodyContainer: {
    position: "absolute",
    top: "55%", // Coloca el centro vertical en el 50% de la pantalla
    left: "48%", // Coloca el centro horizontal en el 50% de la pantalla
    transform: [{ translateX: -150 }, { translateY: -100 }], // Ajusta la posición
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    color: "red",
  },
  input: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderColor: "yellow",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
