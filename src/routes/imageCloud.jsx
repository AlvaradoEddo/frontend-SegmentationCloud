import React from 'react'


import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function ImageCloudPage() {

  function returnHome() {
    console.log('The link was clicked.');
  }

  function downloadResult(){
    console.log('The link was clicked.');
  }

  function analyzeImage(){
    console.log('The link was clicked.');
  }


  return (
    <Layout>
      <Article>
        <ArticleContent title="Tu imagen">
          <p>Que desea realizar: </p>


          <div className="flex flex-col space-y-4">
            <button onclick={analyzeImage} className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg">
              Analizar imagen
            </button>
            <button onClick={downloadResult} className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg">
              Descargar Resultados
            </button>
            <button onClick={returnHome} className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg">
              Subir otra imagen
            </button>
          </div>
          
        </ArticleContent>

        <ArticleMedia>
          <img src="https://picsum.photos/420/640" alt="Lorem Picsum" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
