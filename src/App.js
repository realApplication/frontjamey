import './App.css';
// import Header from './componants/header';
// import Main from './componants/main'
import LoginProvider from './componants/context';
import Login from './componants/login';
import PickedCourses from './componants/PickedCourses';
// import Footer from './componants/footer'

function App() {
  return (
    <>

<LoginProvider>
<Login/>

{/* <PickedCourses/> */}
{/* <Auth/ > */}
  
</LoginProvider>


    {/* <Header/> */}
    {/* <Main /> */}
    {/* <Footer/> */}
    </>
  );
}

export default App;

