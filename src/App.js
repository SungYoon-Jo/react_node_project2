// import './App.css';
import { useState } from 'react';

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}

  </article>
}

function Header(props) {
  console.log('props', props, props.title);
  return <header>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>
      {props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Create(props) {
  return <article>
    <h2>create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.oncreate(title, body);
    }}>
      <p><input type="text" name='title' placeholder='title' /></p>
      <p><textarea name='body' placeholder='body'></textarea></p>
      <p><input type="submit" value="create"></input></p>
    </form>
  </article>
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name='title' placeholder='title' value={title} onChange={event => {
        setTitle(event.target.value);
      }} /></p>
      <p><textarea name='body' placeholder='body' value={body} onChange={event => {
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="update"></input></p>
    </form>
  </article>

}
function App() {
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  const [netxId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'html is ...' },
    { id: 3, title: 'javascript', body: 'html is ...' }
  ]);
  let content = null;
  let contextControl = null;
  if (mode === 'welcome') {
    content = <Article title="welcome" body="hello, web"></Article>
  } else if (mode === 'read') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
    <li><a href={'/update/' + id} onClick={event => {
      event.preventDefault();
      setMode('update');
    }}>update</a></li>
    <li><input type="button" value="delete" onClick={()=>{
      const newTopics = []
      for(let i =0; i<topics.length;i++){
        if(topics[i].id !== id){
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('welcome');
    }}></input></li>
    </> 

  } else if (mode === 'create') {
    content = <Create oncreate={(_title, _body) => {
      const newTopic = { id: netxId, title: _title, body: _body }
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics)
      setMode('read');
      setId(netxId);
      setNextId(netxId + 1);
    }}></Create>
  } else if (mode === 'update') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      const newTopics = [...topics]
      const updatedTopic = { id: id, title: title, body: body }
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('read');
    }}></Update>
  }
  return (

    <div>
      <Header title="web" onChangeMode={() => {
        setMode('welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('read');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href='/create' onClick={event => {
          event.preventDefault();
          setMode('create')
        }}>create</a></li>
        {contextControl}
      </ul>
    </div>


  );
}

export default App;
