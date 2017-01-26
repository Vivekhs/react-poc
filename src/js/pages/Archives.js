import React from 'react';
import Article from '../components/Article';

export default class Archives extends React.Component {

    render(){
      console.log("Hello Archives");

      const Articles = [
        "Article 1",
        "Article 2",
        "Article 3",
        "Article 4",
        "Article 5",
        "Article 6",
        "Article 7",
        "Article 8",
        "Article 9",
        "Article 10"
      ].map((title, i) =>  <Article key ={i} title={title}/> );
        const adds =[
          "Add 1",
          "Add 2",
          "Add 3",
          "Add 4",
          "Add 5"
        ];

        const addIndex = Math.round(Math.random()*(adds.length -1));


        return(
            <div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="well text-center">
                        {adds[addIndex]}
                    </div>
                  </div>
                </div>

                <div class="row">
                {Articles}
                </div>

              </div>
        );
    }

}
