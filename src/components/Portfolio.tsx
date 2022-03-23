 
 import budgetmonitorAPI from "../images/Budget-monitor-API.png"
 import budgetmonitorReact from "../images/Budget-monitor-react.png"
 import shoppingCart from '../images/ReStore.png'
 import portfolio from '../images/Portfolio.png'
 import appleStore from '../images/AppleStore.png'
 
 const Portfolio = () =>{
     return (
         <section id="portfolio" className="section-4">
             <div className="section-4-heading">
                <h1>Portfolio</h1>
            </div>
             <div className="section-4-content center">
                <div className="portfolio-cards center">

                <div className="portfolio-card">
                    <img src={shoppingCart}/>

                        <div className="portfolio-card-content">
                            <h2>Shopping Cart</h2>
                            <p>
                                
                                The front-end application has login page, user creation page, product catalog page with filter and search functionality, 
                                Shopping cart functionality, check out page with stripe integration and Responsive UI which fits all devices. 
                                
                                This is a sample store application.
                                
                                
                                The front end application is developed with React pure functional components, Redux, TypeScript, Axios, Stripe, Material UI.
                                <br/>
                                This application has an WEB API as back-end which is developed with .NET 5, PostGreSQL, Entity Framework, Identity Server.
                            </p>
                            <div className="porfolio-card-footer">
                            <a href="http://store-shoppe.herokuapp.com" target="_blank"><i className="fa-regular fa-eye"></i></a>
                            <a href="https://github.com/MathiSudhanan/Restore.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                    <img src={appleStore}/>

                        <div className="portfolio-card-content">
                            <h2>Apple Store</h2>
                            <p>
                                Apple Store is the Web page completely designed with HTML, pure CSS and Javascript. 
                                This contains rotating animation of iPhone and user scrollable with UI buttons, loading animation of mac book, simple design for airpods 
                                and scrolling animation for apple watches to match the watch cases and bands. 
                                <br/>
                                It is just a web page with necessary animations required for the products in the page. It is designed to be responsive to all mobile devices.
                            </p>
                            <div className="porfolio-card-footer">
                            <a href="https://mathisudhanan.github.io/AppleStore/" target="_blank"><i className="fa-regular fa-eye"></i></a>
                            <a href="https://github.com/MathiSudhanan/AppleStore.git"  target="_blank"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                    <img src={portfolio}/>

                        <div className="portfolio-card-content">
                            <h2>Portfolio</h2>
                            <p>
                                Portfolio is the React Application completely designed with pure functional components, and pure CSS. 
                                It is designed to be responsive to all mobile devices.
                            </p>
                            <div className="porfolio-card-footer">
                            <a href="https://mathisudhanan.github.io/MyPortfolio/" target="_blank"><i className="fa-regular fa-eye"></i></a>
                            <a href="https://github.com/MathiSudhanan/MyPortfolio.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                    <img src={budgetmonitorReact}/>

                        <div className="portfolio-card-content">
                            <h2>Budget Monitor Web</h2>
                            <p>
                                Budget Monitor React is an React Application which consumes Budget Monitor API. 
                                This Application has login page, user creation page, transaction page where they can view 
                                monthly transaction and date range transaction using calender view.
                                The user can add the transaction and they can view the opening balance,total income, 
                                total expense and current balance. 
                                <br/>
                                This is developed with React pure functional components, React Context for state management, 
                                axios for communicating with API.
                            </p>
                            <div className="porfolio-card-footer">
                            <a href="#" className="disable-links"><i className="fa-regular fa-eye"></i></a>
                            <a href="https://github.com/MathiSudhanan/budget-monitor.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img src={budgetmonitorAPI}/>
                        <div className="portfolio-card-content">
                            <h2>Budget Monitor API</h2>
                            <p>
                                Budget Monitor API serves as the back-end to budget monitor React application. 
                                The Account secion contains Authentication with JWT token and user creation. 
                                Only the authenticated requests will be served by the API. 
                                This aslo deals with CRUD operations for the transactions and its list page. 
                                The API basically is developed with .NET Core 3.1, PostGresQL, Entity Framework, Identity Server.
                            </p>
                            <div className="porfolio-card-footer">
                            <a href="#" className="disable-links"><i className="fa-regular fa-eye"></i></a>
                            <a href="https://github.com/MathiSudhanan/BudgetMonitorWeb.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                            </div>

                        </div>
                    </div>

                    

                </div>
            </div>
         </section>
     )
 }

 export default Portfolio;