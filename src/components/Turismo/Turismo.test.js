import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Turismo from './Turismo';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe('Componente Turismo', () => {
  test('renderiza el componente Turismo', () => {
    render(<Turismo />);
    const titleElement = screen.getByText('Sitios Turísticos de Colombia');
    expect(titleElement).toBeInTheDocument();
  });

  test('obtiene atracciones turísticas al montar el componente', async () => {
    const datosMockeados = { data: [{ name: 'Atracción 1', images: ['imagen1.jpg'], city: { name: 'Ciudad 1' }, description: 'Descripción 1' }] };
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(datosMockeados),
    });

    render(<Turismo />);
    await waitFor(() => expect(screen.getByText('Atracción 1')).toBeInTheDocument());
  });

  test('busca atracciones turísticas al ingresar una palabra clave', async () => {
    const datosMockeados = { data: [{ name: 'Atracción 1', images: ['imagen1.jpg'], city: { name: 'Ciudad 1' }, description: 'Descripción 1' }]};
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(datosMockeados),
    });

    render(<Turismo />);
    const inputElement = screen.getByLabelText('Palabra clave');
    fireEvent.change(inputElement, { target: { value: 'palabra clave' } });
    await waitFor(() => expect(screen.getByText('Atracción 1')).toBeInTheDocument());
  });

  test('muestra mensaje de error si no se encuentran atracciones turísticas', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([]),
    });

    render(<Turismo />);
    const inputElement = screen.getByLabelText('Palabra clave');
    fireEvent.change(inputElement, { target: { value: 'palabra clave' } });
    await waitFor(() => expect(screen.getByText('No se encuentra información con ese criterio de búsqueda')).toBeInTheDocument());
  });
});
