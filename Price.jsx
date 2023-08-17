import React from 'react'
import "./Price.css"
function Price() {
  return React.createElement("section",{},
              React.createElement("div",{className:'container'}),
                  React.createElement("div",{className:'row'}),
                    React.createElement("div",{className:'col-lg-4'},
                      React.createElement("div",{className:'card mb-5 mb-lg-0'})),
                        React.createElement("div",{className:'card-body'},

                          React.createElement("h5",{className:'card-title text-muted text-uppercase text-center'},"Free",
                          React.createElement("h6",{className:'card-price text-center'},"$0/month",
                            React.createElement("ul",{className:'fa-ul'},
                              React.createElement("li",{},
                              React.createElement("span",{className:'fa-li'},"Single User"),
                              React.createElement("li",{},React.createElement("span",{className:'fa-li'},"5GB Storage"),
                              React.createElement("li",{},React.createElement("span",{className:'fa-li'},"Unlimited Public Projects"),
                            ))
                            
                        ))
                        )))
                        
                        , React.createElement("div",{clasName:'d-grid'},"buy",)); 
  
}

export default Price