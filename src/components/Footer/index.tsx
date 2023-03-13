import MuseuLogo from '../../assets/logo_museu_sem_fundo.png'
import RoLogo from '../../assets/logo_ro_colorida-removebg-preview.png'
import FuncerLogo from '../../assets/logo_funcer_sem_fundo.png'

export function Footer() {
  return (
    <footer className='bg-museu_variante1 w-full h-44 p-4'>
      <div>
        <h1 className='text-white text-center text-4xl font-light uppercase'>Museu da Memória Rondoniense</h1>
      </div>
      <div className='flex items-center justify-center gap-48'>
        <div>
          <p className='text-white font-light border-b border-gray-400'>Contato: museudamemoriarondoniense@gmai.com</p>
        </div>
        <div className='flex m-1'>
          <div>
            <img className='object-scale-down w-28 h-28 scale-105' src={MuseuLogo} alt="Logo do museu com fundo laranja" />
          </div>
          <div>
            <img className='object-scale-down w-28 h-28 scale-105' src={RoLogo} alt="Logo do museu com fundo laranja" />
          </div>
          <div>
            <img className='object-scale-down w-28 h-28 scale-105' src={FuncerLogo} alt="Logo do museu com fundo laranja" />
          </div>
        </div>
      </div>
      
    </footer>
  )
}
