import  MuseuLogo  from '../../assets/logo_museu_sem_fundo.png'
export function Header() {
  return (
    <header className=' bg-museu_standard w-screen h-60'>
        <div className='flex w-[24rem] h-full justify-center'>
          <img className=' w-full h-full object-contain scale-105' src={MuseuLogo} alt="Logo do museu com fundo laranja" />
        </div>
    </header>
  )
}