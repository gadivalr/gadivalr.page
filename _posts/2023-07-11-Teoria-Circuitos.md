---
title: "Teoría de Circuitos"
date: 2023-07-11
tags: [Apuntes]
image: "/assets/img/Circuitos.jpg"
usemathjax: true
---
### Introducción
En este post, documentaré todo lo que voy aprendiendo acerca de teoría de circuitos, espero que sea de utilidad. Comencemos con la definición o a que nos referimos con teoria de circuitos. La teoría de circuitos eléctricos es una rama de la ingeniería eléctrica que se encarga del estudio de las cargas en reposo y en movimiento, de las corrientes eléctricas y de los campos magnéticos en el interior de los materiales y en su superficie. Su base es la teoría electromagnética, cuyos principios básicos son la ley de Coulomb, la ley de Gauss, la ley de Ohm y  entre otras. <br>
La teoría de circuitos eléctricos se aplica a la resolución de problemas prácticos de ingeniería eléctrica, electrónica, telecomunicaciones y de control. <br>
La bibliografía que estaré utilizando es la siguiente:
- [Dorf, R.C. y Svoboda, J.A. Circuitos eléctricos](/assets/pdf/Dorf,%20R.C.%20y%20Svoboda,%20J.A.%20Circuitos%20eléctricos.pdf)
- [Hayt, W.H., Kemmerly, J.E. y Durbin, S.M. Análisis de circuitos en ingeniería.](/assets/pdf/Hayt,%20W.H.,%20Kemmerly,%20J.E.%20y%20Durbin,%20S.M.%20Análisis%20de%20circuitos%20en%20ingeniería.pdf.pdf) 




### Los contenidos que se abordarán son los siguientes:
- [Elementos de circuitos (Resistencias, Capacitores, Inductores, etc.)](#elementos-de-circuitos)
- Leyes fundamentales (Ley de Ohm, Ley de Kirchhoff, etc.)
- Teoremas de circuitos (Teorema de Thevenin, Teorema de Norton, etc.)
- Análisis de circuitos (Mallas, Nodos, etc.)
- Redes de dos puertas (Redes de dos puertas, Redes de dos puertas en serie, etc.)
- Formulación para solución de circuitos (Método de mallas, Método de nodos, etc.)
- Planteamiento de las soluciones fundamentales (Solución de circuitos de primer orden, Solución de circuitos de segundo orden, etc.)
- Métodos de solución (EDOs, Transformada de Laplace, Transformada de Fourier, etc.)

### Elementos de circuitos
Los elementos de circuitos son dispositivos que se utilizan para construir circuitos eléctricos. <br>
Estos elementos se clasifican en dos categorías: **pasivos** y 
**activos**, determinando si absorben o suministran energía. <br>
Se dice que un elemento es pasivo si su energía total la recibe 
desde el resto del circuito (consume). Un elemento activo es 
aquel que es capaz de generar energía. <br>
Los elementos activos son fuentes potenciales de energía, 
mientras que los elementos pasivos son sumideros o 
absorvedores de energía. <br>
Ejemplos de elementos activos son: baterías y generadores. 
Alternativamente, son pasivos: estufas, ampolletas y motores.
### Modelos
En ingeniería se usan modelos para representar los 
elementos de un circuito eléctrico.<br>
Un modelo es una descripción de esas propiedades de un 
dispositivo que creemos que son importantes. El modelo 
constará de una ecuación que relaciona el voltaje y la 
corriente del elemento. <br>
Es fácil trabajar con modelos simples, pero es posible que no 
sean precisos. Los modelos precisos suelen ser más 
complicado y más difícil de usar. <br>
Los modelos idealizados de dispositivos eléctricos están 
definidos con precisión. Es importante distinguir entre los 
dispositivos reales y sus **modelos idealizados**, que llamamos 
*elementos de circuito*. <br>
Los modelos de elementos de circuito se pueden 
clasificar de varias formas. <br>
Una clasificación es la siguiente:
- **Elementos de circuito lineales**
- **Elementos de circuito no lineales**


Es importante distinguir los modelos 
lineales de los modelos no lineales porque los circuitos 
que constan completamente de elementos de circuitos 
lineales son más fáciles de analizar que los circuitos que 
contienen algunos elementos no lineales. <br>
Un elemento es lineal si, y solo si, se satisfacen las 
propiedades de superposición y homogeneidad para 
todas las excitaciones y respuestas.
### Modelos de elementos Pasivos y Activos
Los modelos a definir están basados en aspectos físicos que están 
presentes en ingeniería eléctrica que toman en consideración los 
efectos que se presentan debido a la circulación de electrones. <br>
1.  Los materiales que se oponen al paso del electrón exhiben una 
propiedad llamada **RESISTENCIA**
2. Los electrones en movimiento producen un campo magnético 
y definen una propiedad conocida como **INDUCTANCIA**
3. La presencia de electrones estáticos producen campo eléctrico 
y especifican una cualidad llamada **CAPACITANCIA** <br>
Por lo tanto, los modelos primordiales (básicos) se 
consideran pasivos y se usan para representar los 
fenómenos físicos anteriores.


### Resistencia
La resistencia o resistividad ( **ρ** ) es la capacidad de un 
material para resistir el flujo de cargas (**electrones**). <br>
Los materiales que son buenos aislantes eléctricos 
tienen un alto valor de resistividad. Los materiales que 
son buenos conductores de corriente eléctrica tienen 
valores bajos de resistividad. <br>
El cobre se usa comúnmente para cables porque 
permite que la corriente fluya sin obstáculos. En 
sistemas de alto volumen de energía es el aluminio. 
<hr>
Georg Simon Ohm pudo demostrar que la 
corriente y la diferencia de potencial (voltaje) en 
un circuito compuesto por una batería y un cable 
conductor de sección transversal uniforme, sigue 
el siguiente comportamiento: 
<hr>
![Resistencia](/assets/img/ohm.jpg)
<figcaption> <b>Figura 1.</b> <i>Relación entre la corriente y el voltaje en un circuito eléctrico.</i> </figcaption>

### Capacitancia
La capacitancia es una medida de la habilidad de un 
dispositivo para almacenar energía en forma de una carga 
separada o un campo eléctrico.
<hr>

{% raw %}

$$
C = \frac{Q}{V}
$$

{% endraw %}
Donde: <br>

{% raw %}

$$
\begin{align*}
C &= \text{Capacitancia en Faradios (F)} \\
Q &= \text{Carga en Coulombs (C)} \\
V &= \text{Voltaje en Volts (V)}
\end{align*}
$$


{% endraw %}

### Inductancia
La inductancia es una medida de la habilidad de un 
dispositivo para almacenar energía en forma de un campo 
magnético.

<hr>

{% raw %}
$$
L = \frac{\phi}{i}
$$
{% endraw %}
Donde: <br>

{% raw %}
$$
\begin{align*}
L &= \text{Inductancia en Henrys (H)} \\
\phi &= \text{Flujo magnético en Webers (Wb)} \\
i &= \text{Corriente en Amperes (A)}
\end{align*}
$$
{% endraw %}


