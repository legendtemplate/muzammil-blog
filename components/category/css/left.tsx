import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function left() {
  return (
    <h1 class="main-title">JavaScript</h1>

<nav class="table-of-contents">
  <div class="wrap">
    <h2 class="table__title">Contents</h2>
    <div class="toggle-wrapper">
      <button class="toggle" type="button">hide</button>
    </div>
  </div>
  
  <ul class="table__list">
    <li class="table__list-item">
      <span class="content__number">1</span>
      <a href="#" class="table__link">History</a>
      <!--Nested list 1-->
      <ul class="table__nested-list">
        <li class="nested-list__item">
          <span class="content__number">1.1</span>
          <a href="#" class="table__link">Creation at Netscape</a>
        </li>
        
        <li class="nested-list__item">
          <span class="content__number">1.2</span>
          <a href="#" class="table__link">Adoption by Microsoft</a>
        </li>
        
        <li class="nested-list__item">
          <span class="content__number">1.3</span>
          <a href="#" class="table__link">The rise of JScript</a>
        </li>
        
        <li class="nested-list__item">
          <span class="content__number">1.4</span>
          <a href="#" class="table__link">Growth and standarization</a>
        </li>
        
        <li class="nested-list__item">
          <span class="content__number">1.5</span>
          <a href="#" class="table__link">Server-side JavaScript and Node.js</a>
        </li>
        
        <li class="nested-list__item">
          <span class="content__number">1.6</span>
          <a href="#" class="table__link">Reaching maturity</a>
        </li>
      </ul><!--End of the nested list 1-->
    </li>
    


      

  </ul>
</nav>
  );
}
