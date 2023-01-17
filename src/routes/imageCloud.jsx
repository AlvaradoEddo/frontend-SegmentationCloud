import React from 'react'


import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import { useNavigate } from 'react-router-dom';
import { responseModel } from '../components/newsletter-form';

export default function ImageCloudPage() {

  const navigate = useNavigate();

  function returnHome() {
    navigate("/")
  }

  function downloadResult() {
    
  }




  return (
    <Layout>
      <Article>
        <ArticleContent title="Tu imagen">
          <p>Que desea realizar: </p>


          <div className="flex flex-col space-y-4">
            <button onClick={downloadResult} className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg">
              Descargar Resultados
            </button>
            <button onClick={returnHome} className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg">
              Subir otra imagen
            </button>
          </div>

        </ArticleContent>

        <ArticleContent>
          

          <div style={{
            backgroundColor: 'white',
            width: '420px',
            height: '640px',
            display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: '29%',
        
          }}>
            Nombre de la imagen Nube
            <br />
            Precision de 90%
            <br />  
            Valor de 1000
            <br />
            En Milisegundos
          </div>

        </ArticleContent>
      </Article>
    </Layout>
  )
}
