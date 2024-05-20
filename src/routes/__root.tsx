import { createRootRoute, Outlet } from '@tanstack/react-router';
import '@mantine/core/styles.css';
import '../index.css';
import { Button, createTheme, MantineProvider, PasswordInput, TextInput } from '@mantine/core';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: {
        input: 'text-input',
      },
      styles: {
        input: {
          padding: '1.5rem 2rem',
          borderRadius: '9999px',
          background: 'black',
          color: 'white',
        },
        root: {
          color: 'white',
        },
      },

      defaultProps: {
        color: '#FFF',
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        input: 'text-input',
      },
      styles: {
        input: {
          padding: '1.5rem 2rem',
          borderRadius: '9999px',
          background: 'black',
          color: 'white',
        },
        root: {
          color: 'white',
        },
      },

      defaultProps: {
        color: '#FFF',
      },
    }),
    Button: Button.extend({
      defaultProps: {
        color: 'black',
        radius: '999px',
      },
    }),
  },
});
export const Route = createRootRoute({
  component: () => (
    <>
      <MantineProvider theme={theme}>
        <Outlet />
      </MantineProvider>
    </>
  ),
});
