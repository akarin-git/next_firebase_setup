import firebase from '../lib/db';
import React from 'react';


 export default class Posts extends React.Component {
  static async getInitialProps() {
    // db.jsのfirebaseのDB接続ファンクション
    // DBのpostsコレクション内を全て取得した結果 = result
    let result = await new Promise((resolve, reject) => {
      firebase.firestore().collection("form")
      .get()
      .then(snapshot => {
        let data = []
        snapshot.forEach((doc) => {
          data.push(
            Object.assign({
              id: doc.id
            }, doc.data())
          )
        })
        resolve(data)
        console.log(data);
      }).catch(error => {
        reject([])
      })
    })
    return {posts: result}
  }

  handleDelete = (id) => {
    console.log(id)
  }

  render() {
    const posts = this.props.posts
    return (
        <React.Fragment>
                {posts.map(post =>
                    <div className="post" key={post.id}>
                        <h2>
                            {post.name}
                        </h2>
                        <p>
                            {post.email}
                        </p>
                        <button onClick={this.handleDelete.bind(this, post.id)}>idチェック</button>
                    </div>
                    )}
            <style jsx>{`
            .post {
                width: 40%;
                border: 1px solid black;
                background-color: gray;
                margin-bottom: 10px;
            }
            `}</style>
        </React.Fragment>
    );
  }

  }