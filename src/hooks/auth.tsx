import React, { createContext, useState, useContext } from 'react';

interface AuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

interface ChildrenType {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

const AuthProvider: React.FC<ChildrenType> = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('minha-carteira:logged');

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if(email === 'usuario@usuario.com' && password === '123'){
      localStorage.setItem('minha-carteira:logged', 'true');
      setLogged(true);
    } else {
      alert('Senha ou email inválido');
    }
  };

  const signOut = () => {
    localStorage.removeItem('minha-carteira:logged');
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContext {
  const context= useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };