// ═══════════════════════════════════════════
//   LÓGICA DE MATRÍCULA
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    const btnInscribir = document.getElementById('btn-inscribir');
    const emailInput = document.getElementById('email-input');

    if (btnInscribir && emailInput) {
        btnInscribir.addEventListener('click', async (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto
            
            const email = emailInput.value.trim();

            // Validación básica
            if (!email || !email.includes('@')) {
                alert('Por favor, ingresa un correo electrónico válido.');
                emailInput.focus();
                return;
            }

            // Cambiar estado del botón para dar feedback al usuario
            const textoOriginal = btnInscribir.innerText;
            btnInscribir.innerText = 'Enviando...';
            btnInscribir.disabled = true;

            try {
                /* Aquí irá la futura conexión a Supabase:
                  const { data, error } = await supabaseClient
                    .from('matriculas')
                    .insert([{ email: email }]);
                  
                  if (error) throw error;
                */

                // Simulación de tiempo de red (remover cuando uses Supabase)
                await new Promise(resolve => setTimeout(resolve, 1000));

                console.log('✅ Matrícula procesada para:', email);
                alert(`¡Gracias! Hemos registrado el correo: ${email}. Un asesor se pondrá en contacto contigo pronto.`);
                
                // Limpiar formulario
                emailInput.value = '';
            } catch (error) {
                console.error('Error al registrar matrícula:', error);
                alert('Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.');
            } finally {
                // Restaurar botón
                btnInscribir.innerText = textoOriginal;
                btnInscribir.disabled = false;
            }
        });
    }
});