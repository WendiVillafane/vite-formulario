import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Informacion = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/tickets', values);
      console.log('Ticket enviado:', response.data);
      reset();
    } catch (error) {
      console.error('Error al enviar el ticket:', error);
    }
  };

  return (
    <div className='todo'>
      <h2>ADD TICKET</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" {...register('title', { required: true })} />
          {errors.title && <small className="fail">El campo no puede estar vacío</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Priority</label>
          <input type="number" className="form-control" {...register('priority', { required: true })} />
          {errors.priority && <small className="fail">El campo no puede estar vacío</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" {...register('text', { required: true })}></textarea>
          {errors.text && <small className="fail">El campo no puede estar vacío</small>}
        </div>
        <input type="submit" className="btn btn-info" value="Enviar" />
      </form>
    </div>
  );
}

export default Informacion;
