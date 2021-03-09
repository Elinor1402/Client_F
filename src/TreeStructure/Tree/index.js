import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const StyledTree = styled.div`
  line-height: 1.5;
`;


const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
const StyledFolder = styled.div`
  padding-left: 20px;
  // color:red
  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

const Collapsible = styled.div`

  ${props => props.isOpen ?
    `display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1; ` :

  ` display: none;`
  }
`;


const File = ({ name }) => {
    
    return (
      <StyledFile>
        {/* <AiOutlineFile /> */}
        <span>{name}</span>
      </StyledFile>
    );
  };

  const Folder = ({ name, childrens }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = e => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };


    return (
        <StyledFolder>
           {/* {console.log("the childrens")}
         {console.log(childrens)} */}
        <div className="folder--label" onClick={handleToggle}>
          {console.log("toggule " + isOpen)}
          {console.log(childrens)}

          <span>{name}</span>
        </div>

       {childrens!="undefined"? <Collapsible isOpen={isOpen}>
          {/* <p>{childrens}</p> */}

          { childrens.map((item,i )=> (
                 <p key={i}>{item.name }</p>
                
              ))}

        </Collapsible>: console.log("no childrens")}

      </StyledFolder>
    );
  };


   const CreateTree = (data) => {
   console.log("Tree is")
   console.log(data)
    return <StyledTree>{TreeRecursive(data)}</StyledTree>;
  };

  const TreeRecursive = (data) => {
    console.log("TreeR")
    console.log(data)

    return data.map((item ,i)=>{
      // item= JSON.stringify(item);
      if (item.type === 'file') {

        console.log("file")
        return <File name={item.name} key={i}/>;
      }
      // if its a folder render <Folder />
      if (item.type === 'folder') {

        console.log("folder")
        return (
          
          <Folder name={item.name} childrens={item.childrens} key={i}>
            {/* Call the <TreeRecursive /> component with the current item.childrens */}

            {console.log("the childrens")}
            {console.log(item.childrens)}
          
           {/* <TreeRecursive data={item.childrens}/> */}
            {TreeRecursive(item.childrens)}
          
           {/* {item.childrens.length!=0 ?  <TreeRecursive data={item.childrens} />: console.log("no children")} */}
           
          </Folder>
        );
      }
    });
  }
      // if its a file render <File />
     
    
  export default CreateTree;