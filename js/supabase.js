// Importar Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Tus claves de conexión
const SUPABASE_URL = "https://jxgzksmhvkhypzdjwwww.supabase.co";
const SUPABASE_KEY = "sb_publishable_c8GHy6_xh7uDEas8Itq2qA_ZSdVIC0_";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', () => {
  // Buscamos el formulario nuevo
  const formMatricula = document.getElementById('form-matricula');
  
  if (formMatricula) {
    const btnSubmit = document.getElementById('m-submit-btn');
    const feedback = document.getElementById('m-feedback');

    function mostrarFeedback(mensaje, tipo) {
      feedback.textContent = mensaje;
      feedback.style.display = 'block';
      feedback.style.color = tipo === 'exito' ? '#4ade80' : '#f87171'; // Verde claro / Rojo claro para fondo oscuro
    }

    formMatricula.addEventListener('submit', async function (e) {
      e.preventDefault();

      const datos = {
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        telefono: document.getElementById('telefono').value.trim() || null,
        curso: document.getElementById('curso').value,
        nivel: document.getElementById('nivel').value || null,
        mensaje: document.getElementById('mensaje').value.trim() || null,
      };

      btnSubmit.disabled = true;
      btnSubmit.textContent = 'Enviando matrícula...';
      feedback.style.display = 'none';

      try {
        const { error } = await supabase.from('matriculas').insert([datos]);
        if (error) throw error;

        mostrarFeedback('¡Matrícula enviada con éxito! Te contactaremos pronto.', 'exito');
        formMatricula.reset();
      } catch (err) {
        console.error('Error al guardar matrícula:', err);
        mostrarFeedback('Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.', 'error');
      } finally {
        btnSubmit.disabled = false;
        btnSubmit.textContent = 'Enviar solicitud de matrícula';
      }
    });
  }
});