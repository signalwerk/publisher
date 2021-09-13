---
title: Flexbox – ausrichten von Elementen im Web
description: Flexbox – ausrichten von Elementen im Web
---

<style>
@import '../css-units/browser.css';
@import './flex.css';
@import './grid.css';

@media print {
  .content {
    max-width: 28rem;
  }
}
</style>



## Publisher 3 · 2020
Erscheinungsdatum · 2020

<hr />

## Lizenzen
Dieser Text ist von Stefan Huber unter der Lizenz [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) veröffentlicht. [Publisher](https://publisher.ch/) erhält das Recht die Inhalte ohne Copyleft (Share Alike) zu publizieren.

<hr />

[Bilder für Print (pdf)](./flexbox_graphics_print.pdf)

<hr />


# Flexbox – ausrichten von Elementen im Web

<lead>

Das sehr flexible CSS-Grid ist der Kandidat der Wahl, wenn es darum geht, zweidimensionale Layouts möglichst lebendig zu erstellen. Doch um einzelne Elemente zu verteilen, ist Flexbox genau das Richtige.

</lead>

## Rückschau
Die erste Veröffentlichung von [Cascading Style Sheets (CSS)](https://www.w3.org/TR/REC-CSS1-961217) im Jahr 1996 hatte bereits eine sehr gute Grundlage geschaffen, um Texte zu formatieren und die Struktur vom Inhalt auch visuell zu unterscheiden. Wollte man jedoch ein reiches Layout mit komplexen Strukturen erstellen, war dies meist schwieriger zu erreichen. Insbesondere weckte die seit der iPhone-Einführung 2007 stetig wachsende Bedeutung von Mobilgeräten das Bedürfnis, auch flexible Layouts für verschiedene Screengrössen adaptieren zu können. Erst seit Herbst 2018 gibt es nun eine Spezifikation über das so genannte [Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/) (kurz Flexbox). Obwohl dieser Standard streng gesehen noch nicht abgeschlossen ist, wird er schon von allen modernen Browsern unterstützt. Das bereits 2017 eingeführten [Grid Layout Module](https://www.w3.org/TR/css-grid-1/) (kurz CSS-Grids) wurde wesentlich zögerlicher implementiert. Es steht also nichts im Weg, Flexbox zu verwenden.

## Anwendungsbereich
Auch wenn Flexbox den Anschein erweckt, dass man damit zweidimensionale Layouts erstellen kann, handelt es sich streng genommen doch eher um eine Methode zur Positionierung von Elementen in horizontalen oder vertikalen Schichtungen. Man kann zwar horizontal oder vertikal gewisse Ausrichtungen steuern, für wirklich freie zweidimensionale Aufteilungen muss man aber CSS-Grids verwenden. Dennoch bietet Flexbox viele mächtige Funktionen zur Positionierung von Elementen.

<br />



### Flexbox

<div class="svg-export">
<div class="example-content">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height">
      <div class="col-2of3 col-mrgb">
        <span class="leg">Spalte 1 + 2</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">Spalte 3</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">Spalte 1</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">Spalte 2</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">Spalte 3</span>
      </div>
      <div class="col-1of3">
        <span class="leg">Spalte 1</span>
      </div>
      <div class="col-2of3">
        <span class="leg">Spalte 2 + 3</span>
      </div>
    </div>
  </div>
</div>
</div>

*Eine typische Anwendung von Flexbox ist die Aufteilung eines Layouts in Spalten.*


<br />
<br />



### CSS Grids

<div class="svg-export">
<div class="example-content">
  <div class="example-content__inner">
    <div class="example-grid">
      <div class="grd-w2">
        <span class="leg">Spalte 1 + 2</span>
      </div>
      <div class="grd-h2 grd-special">
        <span class="leg">Spalte 3</span>
      </div>
      <div class="">
        <span class="leg">Spalte 1</span>
      </div>
      <div class="">
        <span class="leg">Spalte 2</span>
      </div>
      <div class="">
        <span class="leg">Spalte 1</span>
      </div>
      <div class="grd-w2">
        <span class="leg">Spalte 2 + 3</span>
      </div>
    </div>
  </div>
</div>
</div>

*Möchte man aber statt Spalten einen Gestaltungsraster, der auch über mehrere  «Zeilen» hinweg funktioniert, so arbeitet man besser gleich mit CSS-Grids.*




## Hauptachse & Kreuzachse



Grundsätzlich benötigt man in HTML einen durch den Display-Modus `flex` definierten Container, in dem die zu verteilenden Elemente enthalten sind. Innerhalb dieses Containers können Haupt- und die Kreuzachse anschliessend beeinflusst werden. Die Hauptachse ordnet standardmässig von links nach rechts, die Kreuzachse von oben nach unten.



### HTML

<div class="svg-export">

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

</div>


### CSS

<div class="svg-export">

```css
.container {
  display: flex;
}
```

</div>


Die Elemente, die dann im Container eingefügt werden, orientieren sich nun an der Hauptachse.

<br />

<style>
@import './arrow.css';

.example-axis {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.example-axis--rotate {
  transform: rotate(90deg) translateY(-150%);
  transform-origin: top left;
  width: 22.4rem;
}

@media print {
  .example-axis--rotate {
    width: 16.4rem;
  }
}

.example-flex--gray div[class^='col-']{
  background-color: #eee;

}
</style>


<div class="svg-export">
<div class="example-content">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height example-flex--gray">
      <div class="col-3of3">
        <span class="leg"></span>
      </div>
    </div>
    <div class="example-axis">
      <div class="arrow arrow--right">
        &nbsp;&nbsp;Hauptachse
        <span class="shaft"></span>
      </div>
    </div>
    <div class="example-axis example-axis--rotate">
      <div class="arrow arrow--right">
        &nbsp;&nbsp;Kreuzachse
        <span class="shaft"></span>
      </div>
    </div>
  </div>
</div>
</div>








## Container – flex-direction
Über das Attribut `flex-direction` können wir die Hauptachse in horizontalen Zeilen oder vertikalen Spalten orientieren. Neben `row` und `column` gibt es jeweils noch `row-reverse` und `column-reverse`, bei denen die Reihenfolge umgekehrt wird.

 ### Row (Standard)

 <div class="svg-export">


```css
.container {
  display: flex;
  flex-direction: row;
}
```

<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>


<br />

### Column

<div class="svg-export">

```css
.container {
  display: flex;
  flex-direction: column;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-col">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>




<br />

## Container – flex-wrap

Standardmässig werden alle Elemente auf einer Zeile angepasst. Mit `flex-wrap` kann gesteuert werden, wie sich die Elemente innerhalb des Containers anordnen sollen.


### nowrap (Standard)

<div class="svg-export">


```css
.container {
  display: flex;
  flex-wrap: nowrap;
}
```


<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-margin" style="flex-wrap: nowrap;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
      <div class="col-1of3">
        <span class="leg">4</span>
      </div>
    </div>
  </div>
</div>
</div>


### wrap

<div class="svg-export">


```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```


<div class="example-content example-content--two">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height" style="flex-wrap: wrap;">
      <div class="col-1of3 col-mrgb">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">3</span>
      </div>
      <div class="col-1of3">
        <span class="leg">4</span>
      </div>
    </div>
  </div>
</div>
</div>



### wrap-reverse

<div class="svg-export">


```css
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```


<div class="example-content example-content--two">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height" style="flex-wrap: wrap-reverse;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">4</span>
      </div>
    </div>
  </div>
</div>
</div>







## Container – justify-content


Eine der wichtigsten eigenschaften vom Container ist das Attribut `justify-content`. Es hilft dabei zu bestimmen, wie die Elemente im Container ausgerichtet werden sollen. Abgebildet sind die meist verwendeten Werte. Es gibt zusätzlich noch Möglichkeiten, sich an der Schreibrichtung zu orientieren. Dies ist vorallem bei internationalen Websites mit verschiedenen Schreibrichtungen (links nach rechts & rechts nach links) nützlich.


### flex-start (Standard)

<div class="svg-export">

```css
.container {
  display: flex;
  justify-content: flex-start;
}
```


<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="justify-content: flex-start;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>

</div>

### flex-end

<div class="svg-export">

```css
.container {
  display: flex;
  justify-content: flex-end;
}
```


<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="justify-content: flex-end;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>

</div>


### center

<div class="svg-export">


```css
.container {
  display: flex;
  justify-content: center;
}
```


<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="justify-content: center;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>

</div>



### space-between


<div class="svg-export">


```css
.container {
  display: flex;
  justify-content: space-between;
}
```


<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="justify-content: space-between;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>


### space-around

<div class="svg-export">



```css
.container {
  display: flex;
  justify-content: space-around;
}
```


<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="justify-content: space-around;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>


### space-evenly

<div class="svg-export">

```css
.container {
  display: flex;
  justify-content: space-evenly;
}
```


<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="justify-content: space-evenly;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>






## Container – align-items

Das Attribut `align-items` steuert, wie die Elemente innerhalb des Containers auf der Kreuzachse ausgerichtet werden. Neben den abgebildeten Werten gibt es noch weitere. Insbesondere wird mit `baseline` auch die Möglichkeit, die Elemente an der Schriftlinie auszurichten, ab und an verwendet.


### stretch (Standard)

<div class="svg-export">


```css
.container {
  display: flex;
  align-items: stretch;
}
```


<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="align-items: stretch;">
      <div class="col-1of3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>




### flex-start

<div class="svg-export">

```css
.container {
  display: flex;
  align-items: flex-start;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="align-items: flex-start;">
      <div class="col-1of3 col-h3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-h1">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-h2">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>



### flex-end

<div class="svg-export">

```css
.container {
  display: flex;
  align-items: flex-end;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="align-items: flex-end;">
      <div class="col-1of3 col-h3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-h1">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-h2">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>


### center

<div class="svg-export">


```css
.container {
  display: flex;
  align-items: center;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-item flex-margin" style="align-items: center;">
      <div class="col-1of3 col-h3">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-h1">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-h2">
        <span class="leg">3</span>
      </div>
    </div>
  </div>
</div>
</div>


## Container – align-content
Entsprechend zu `justify-content`, das die Verteilung der Elemente auf der Hauptachse steuert, wird `align-content` genutzt, um die Elemente auf der Kreuzachse einzurichten.  
Hier exemplarisch einige Werte:

### stretch (Standard)

<div class="svg-export">


```css
.container {
  display: flex;
  align-content: stretch;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height" style="flex-wrap: wrap; align-content: stretch;">
      <div class="col-1of3 col-mrgb">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-mrgb">
        <span class="leg">3</span>
      </div>
      <div class="col-1of3">
        <span class="leg">4</span>
      </div>
    </div>
  </div>
</div>
</div>








### flex-start

<div class="svg-export">



```css
.container {
  display: flex;
  align-content: flex-start;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height" style="flex-wrap: wrap; align-content: flex-start;">
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">3</span>
      </div>
      <div class="col-1of3 col-h1">
        <span class="leg">4</span>
      </div>
    </div>
  </div>
</div>
</div>





### flex-end

<div class="svg-export">


```css
.container {
  display: flex;
  align-content: flex-end;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height" style="flex-wrap: wrap; align-content: flex-end;">
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">3</span>
      </div>
      <div class="col-1of3 col-h1">
        <span class="leg">4</span>
      </div>
    </div>
  </div>
</div>
</div>



### space-evenly

<div class="svg-export">

```css
.container {
  display: flex;
  align-content: space-evenly;
}
```

<div class="example-content example-content--tree">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height" style="flex-wrap: wrap; align-content: space-evenly;">
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3 col-mrgb col-h1">
        <span class="leg">3</span>
      </div>
      <div class="col-1of3 col-h1">
        <span class="leg">4</span>
      </div>
    </div>
  </div>
</div>
</div>










## Elemente – flex-basis, flex-grow & flex-shrink
Wenn kein `flex-basis` angegeben wird, orientiert sich die Breite der Elemente auf der Hauptachse an dem `width`-Wert des Elements. Wird jedoch ein `flex-basis`-Wert für die Elemente angegeben, bleibt der `width`-Wert unberücksichtigt und man kann stattdessen mit `flex-basis` ein Verhältnis zwischen den einzelnen Elementen angeben. Somit ist der Container flexibel und der Inhalt passt sich an. Die Attribute `flex-grow` und `flex-shrink` geben an, wie unbenutzter Raum verwendet werden soll.


### flex-basis

<div class="svg-export">

```css
.item1, .item2, .item3 {
  flex-basis: 20%;
}
```

<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-margin" style="">
      <div class="col-1of3" style="flex-basis: 20%;">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3" style="flex-basis: 20%;">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3" style="flex-basis: 20%;">
        <span class="leg">1</span>
      </div>
    </div>
  </div>
</div>
</div>



### flex-grow

<div class="svg-export">

```css
.item1, .item2, .item3 {
  flex-basis: 20%;
}
.item1, .item3 {
  flex-grow: 1;
}
.item2 {
  flex-grow: 2;
}
```

<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-margin" style="">
      <div class="col-1of3" style="flex-basis: 20%; flex-grow: 1;">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3" style="flex-basis: 20%; flex-grow: 2;">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3" style="flex-basis: 20%; flex-grow: 1;">
        <span class="leg">1</span>
      </div>
    </div>
  </div>
</div>
</div>




### flex-shrink

<div class="svg-export">

```css
.item1, .item2, .item3 {
  flex-basis: 40%;
}
.item1, .item3 {
  flex-shrink: 1;
}
.item2 {
  flex-shrink: 2;
}
```

<div class="example-content example-content--one">
  <div class="example-content__inner">
    <div class="example-flex example-flex--full-height flex-margin" style="flex-wrap: nowrap;">
      <div class="col-1of3" style="flex-basis: 40%; flex-shrink: 1;">
        <span class="leg">1</span>
      </div>
      <div class="col-1of3" style="flex-basis: 40%; flex-shrink: 2;">
        <span class="leg">2</span>
      </div>
      <div class="col-1of3" style="flex-basis: 40%; flex-shrink: 1;">
        <span class="leg">1</span>
      </div>
    </div>
  </div>
</div>
</div>

## Fazit
Es gibt noch verschiedenste weitere Optionen, die mit Flexbox kontrolliert werden können. So lässt sich zum Beispiel mit `order` die Reihenfolge der Elemente individuell ordnen und mit `align-self` können einzelne Elemente entlang der Kreuzachse orientiert werden. Doch schon mit wenigen Attributen kann man meist die gewünschte Layout-Anordnung erreichen. Aufgrund der auffallenden Flexibilität von Flexbox ist es allerdings ab und an schwierig, sich hineinzudenken. Aber mit der Zeit lernt man die vielfältigen Anordnungen schätzen, die ein lebendiges Layout ermöglichen.





<hr />

### Autor
Stefan Huber unterrichtet an der [Schule für Gestaltung Zürich](https://sfgz.ch/) im Lehrgang HF Interaction Design und ist als Web-Entwickler tätig.


<hr />
