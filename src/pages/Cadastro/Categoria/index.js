import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(name, value) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleChange(e) {
    // const { getAttribute, value } = e.target;
    // setValue(
    //   getAttribute('name'),
    //   value
    // );
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => { // o que quer que aconteça
    console.log('Teste');
    const URL = 'http://localhost:8080/categorias';

    fetch(URL) // fetch retorna uma Promise
      .then(async (response) => {
        const answer = await response.json();
        setCategorias([
          ...answer,
        ]);
      });
  }, []);// quando quer que aconteça (array vazio quer que aconteça só 1 vez quando começar)

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.name}
      </h1>
      <form onSubmit={function handleSubmit(e) {
        e.preventDefault(); // nao faz reload da pagina
        setCategorias([
          ...categorias, // ... pegar tudo que ja tem
          values, // incluir nova categoria
        ]);

        setValues(initialValues);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.name}`}>
            {categoria.name}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
// cada key é diferente li key

export default CadastroCategoria;
