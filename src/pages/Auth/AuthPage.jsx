import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import AuthBackground from "../../components/AuthBackground";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AnimatedElement from "../../components/AnimatedElement";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <AuthLayout>
      <AuthBackground isRegistering={isRegistering} />

      {/* Form Container */}
      <div className="relative z-10 min-h-screen">
        <div
          className={`fixed top-0 h-full w-full transition-all duration-700 ease-in-out lg:w-1/4 ${isRegistering ? "lg:left-3/4" : "left-0"}`}
        >
          <div className="bg-white-100 dark:bg-black-300 h-full w-full p-6 lg:p-8">
            <div className="mx-auto w-full max-w-md">
              <h1 className="text-black-100 dark:text-white-100 mb-3 text-2xl font-bold sm:text-3xl">
                {isRegistering ? "Registrar" : "Login"}
              </h1>

              <p className="text-black-500 dark:text-white-500 mb-8">
                {isRegistering
                  ? "Crie sua conta para aproveitar dos benefícios de utilizar o FinanSee."
                  : "Seja bem vindo de volta! Faça o login para continuar."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {isRegistering ? (
                  <div className="space-y-6">
                    {[
                      {
                        type: "text",
                        name: "fullName",
                        placeholder: "Nome Completo",
                      },
                      {
                        type: "date",
                        name: "birthDate",
                        placeholder: "Data de Nascimento",
                      },
                      {
                        type: "email",
                        name: "email",
                        placeholder: "Email",
                      },
                      {
                        type: "password",
                        name: "password",
                        placeholder: "Senha",
                      },
                      {
                        type: "password",
                        name: "confirmPassword",
                        placeholder: "Confirmar Senha",
                      },
                    ].map((field, index) => (
                      <AnimatedElement
                        key={field.name}
                        delay={index * 100}
                        isRegistering={isRegistering}
                      >
                        <Input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      </AnimatedElement>
                    ))}
                    <AnimatedElement delay={600} isRegistering={isRegistering}>
                      <input
                        type="file"
                        name="photo"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            photo: e.target.files[0],
                          }))
                        }
                        className="hidden"
                        id="photo"
                        accept="image/*"
                      />
                      <Button
                        type="button"
                        onClick={() => document.getElementById("photo").click()}
                        bgColor="bg-white-100 dark:bg-black-300"
                        textColor="text-accent-400 dark:text-accent-300"
                        className="border-accent-400 dark:border-accent-300 w-full border"
                        hoverColor="hover:bg-white-200 dark:hover:bg-black-400"
                      >
                        Adicionar Foto
                      </Button>
                    </AnimatedElement>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {[
                      {
                        type: "email",
                        name: "email",
                        placeholder: "Email",
                      },
                      {
                        type: "password",
                        name: "password",
                        placeholder: "Senha",
                      },
                    ].map((field, index) => (
                      <AnimatedElement
                        key={field.name}
                        delay={index * 100}
                        isRegistering={isRegistering}
                      >
                        <Input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      </AnimatedElement>
                    ))}
                  </div>
                )}

                <div className="flex transform flex-col gap-4">
                  <AnimatedElement delay={700} isRegistering={isRegistering}>
                    <Button
                      type="submit"
                      bgColor="bg-accent-400 dark:bg-accent-500"
                      textColor="text-white-100"
                      hoverColor="hover:bg-accent-500 dark:hover:bg-accent-400"
                      className="w-full"
                    >
                      {isRegistering ? "Registrar" : "Entrar"}
                    </Button>
                  </AnimatedElement>

                  <AnimatedElement delay={800} isRegistering={isRegistering}>
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <div className="border-white-300 dark:border-black-400 w-full border-t" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white-100 dark:bg-black-300 text-black-500 dark:text-white-500 px-4 text-sm">
                          ou
                        </span>
                      </div>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement delay={900} isRegistering={isRegistering}>
                    <Button
                      type="button"
                      onClick={toggleMode}
                      bgColor="bg-white-100 dark:bg-black-300"
                      textColor="text-accent-400 dark:text-accent-300"
                      hoverColor="hover:bg-white-200 dark:hover:bg-black-400"
                      className="border-accent-400 dark:border-accent-300 w-full border"
                    >
                      {isRegistering ? "Entrar" : "Registrar"}
                    </Button>
                  </AnimatedElement>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
