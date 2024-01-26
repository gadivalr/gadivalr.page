---
title: Serie de Fourier 
date: 2023-06-18
tags: [APUNTES]
comments: true
usemathjax: true
image: /assets/img/img-serie-fourier.jpg
---
### Apuntes serie de Fourier real
La serie de Fourier sirve para representar una función periódica como una suma infinita de funciones seno y coseno con diferentes frecuencias y amplitudes. Esto permite analizar la función en términos de su espectro de frecuencias, es decir, las componentes armónicas que la forman. La serie de Fourier lleva el nombre del matemático francés Jean-Baptiste Joseph Fourier, quien la descubrió en 1822. 

La serie de Fourier de una función f(x) definida en el intervalo [ -L,L ] es la serie trigonométrica:
{% raw %}
$$
\begin{align*}
 
f(x) &=\frac{a_0}{2} +\sum_{n=1}^{+\infty}\quad \Bigl[ a_n\cos\Bigl(\frac{n\pi x}{L}\Bigr)+b_n\sin\Bigl(\frac{n\pi x}{L}\Bigr) \Bigr]\\
&\text{Donde los coeficientes son:}\\
a_0&=\frac{1}{L}\int_{-L}^{L} f(x) \, dx\\ \quad a_n&=\frac{1}{L}\int_{-L}^{L} f(x) \cos(\frac{n\pi x}{L}) \, dx
\\ \quad b_n&=\frac{1}{L}\int_{-L}^{L} f(x) \sin(\frac{n\pi x}{L}) \, dx \\
\end{align*}
$$
{% endraw %}

**La S.F de una función par en el intervalo [-L,L] es la serie de cosenos:**




{% raw %}
$$
\begin{align*}
f(x)&=a_0+\sum_{n=1}^{+\infty} \quad a_n\cos(\frac{n\pi x}{L})\\
a_0&=\frac{2}{L}\int_{0}^{L} f(x) \, dx\\ \quad a_n&=\frac{2}{L}\int_{0}^{L} f(x) \cos(\frac{n\pi x}{L}) \, dx
\end{align*}
$$
{% endraw %}

**La S.F de una función impar en el intervalo [-L,L] es la serie de senos:**

{% raw %}
$$
\begin{align*}
 f(x)&=\sum_{n=1}^{+\infty} \quad b_n\sin(\frac{n\pi x}{L})\\
 b_n&=\frac{2}{L}\int_{0}^{L} f(x) \sin(\frac{n\pi x}{L}) \, dx \\
\end{align*}
$$
{% endraw %}
**Ejemplo: Hallar la S. F de la función:**


{% raw %}
$$
\begin{align*}
f(x)&=\begin{cases} -1 & \text{si } -\pi<x<0 \\ \quad1 & \text{si } 0<x<\pi \end{cases}
\end{align*}
$$
{% endraw %}

**Solución:**
Notamos que la función es impar, por lo tanto, la serie de Fourier será de senos. Además, la función es periódica de periodo 2π, por lo tanto, L=π. <br>

Cálculamos el coeficiente b_n de la forma larga (Usando la definición general de coeficiente b_n) :

{% raw %}
$$
\begin{align*}

b_n&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x) \sin(\frac{n\pi x}{\pi}) \, dx\\
&=\frac{1}{\pi}\int_{-\pi}^{0} (-1) \sin(n x) \, dx \\
&+\frac{1}{\pi}\int_{0}^{\pi} (1) \sin(n x) \, dx\\
&=\frac{1}{\pi}{\Bigl[ \frac{1}{n}\cos(nx) \Bigr]}_{-\pi}^{0} -\frac{1}{\pi}{\Bigl[ \frac{1}{n}\cos(nx) \Bigr]}_{0}^{\pi}\\
&=\frac{1}{\pi}\Bigl[ \frac{\cos(0)}{n} -\frac{\cos(-n\pi)}{n} \Bigr] -\frac{1}{\pi}\Bigl[ \frac{\cos(n\pi)}{n} \\
&-\frac{\cos(0)}{n} \Bigr]\\
&=\frac{1}{\pi}\Bigl[ \frac{1}{n} -\frac{1}{n}\cos(n\pi) \Bigr] -\frac{1}{\pi}\Bigl[ \frac{1}{n}\cos(n\pi) -\frac{1}{n} \Bigr]\\
&=\frac{1}{\pi}\Bigl[ \frac{1}{n} -\frac{{(-1)}{^n}}{n} \Bigr] -\frac{1}{\pi}\Bigl[ \frac{(-1)^{n}}{n} -\frac{1}{n} \Bigr]\\
&=\frac{1}{\pi}\biggl(\Bigl[ \frac{1}{n} -\frac{(-1){^n}}{n} \Bigr] -\Bigl[ \frac{{(-1)}^{n}}{n} -\frac{1}{n} \Bigr] \biggr)\\
&=\frac{1}{\pi}\biggl(\frac{2}{n} -\frac{2 {(-1)}^{n}}{n} \biggr)\\
&=\frac{2}{n\pi}\biggl(1 -(-1)^{n} \biggr)\\
&=\frac{2}{\pi}\biggl( \frac{1 +(-1)^{n+1}}{n} \biggr)\\
\end{align*}
$$
{% endraw %}

Usando la propiedad de paridad de la función seno:
{% raw %}
$$
\begin{align*}
b_n&=\frac{2}{\pi}\int_{0}^{\pi} f(x) \sin(\frac{n\pi x}{\pi}) \, dx\\
&=\frac{2}{\pi}\int_{0}^{\pi} (1) \sin(n x) \, dx\\
&=\frac{2}{\pi}{\Bigl[ -\frac{1}{n}\cos(nx) \Bigr]}_{0}^{\pi}\\
&=\frac{2}{\pi}\Bigl[ -\frac{1}{n}\cos(n\pi) +\frac{1}{n}\cos(0) \Bigr]\\
&=\frac{2}{\pi}\Bigl[ -\frac{1}{n}(-1)^{n} +\frac{1}{n} \Bigr]\\
&=\frac{2}{\pi}\biggl( \frac{1 -(-1)^{n}}{n} \biggr)\\
&=\frac{2}{\pi}\biggl( \frac{1 +(-1)^{n+1}}{n} \biggr)\\
\end{align*}
$$
{% endraw %}




Por lo tanto, la serie de Fourier de la función es:


{% raw %}
$$
\begin{align*}
f(x)&= \frac{2}{\pi}\sum_{n=1}^{+\infty} \quad \biggl( \frac{1 +(-1)^{n+1}}{n} \biggr) \sin(nx)\\
\end{align*}
$$
{% endraw %}

Notamos que con ambos métodos se obtiene el mismo resultado, pero el segundo método (usando la propiedad de paridad de la función seno) es más corto y fácil de calcular.
### Recordar: Propiedades de paridad de las funciones seno y coseno
**Función par:** Una función f(x) es par si f(-x)=f(x) para todo x en el dominio de f(x).<br>
**Función impar:** Una función f(x) es impar si f(-x)=-f(x) para todo x en el dominio de f(x).<br>
**Propiedad de paridad de la función seno:** La función seno es una función impar, es decir, sen(-x)=-sen(x) para todo x en el dominio de la función seno.<br>
**Propiedad de paridad de la función coseno:** La función coseno es una función par, es decir, cos(-x)=cos(x) para todo x en el dominio de la función coseno.<br>


 Siempre que estemos trabajando con una función impar, podemos usar la propiedad de paridad de la función seno para calcular el coeficiente b_n del mismo modo cuando tengamos una función par podemos usar la propiedad de paridad de la función coseno para calcular el coeficiente a_n.

### Serie de Fourier compleja
La serie de Fourier compleja es una forma alternativa de escribir la serie de Fourier de una función f(x) definida en el intervalo [ -L,L ]. La serie de Fourier compleja de una función f(x) definida en el intervalo [ -L,L ] es la serie:
{% raw %}
$$

\begin{align*}
f(x) &=\sum_{n=-\infty}^{+\infty} \quad c_n e^{i\frac{n\pi x}{L}}\\
\end{align*}
$$
{% endraw %}
Donde el coeficiente esta dado por:
{% raw %}
$$
\begin{align*}
c_n=\frac{1}{2L}\int_{-L}^{L} f(x) e^{-i\frac{n\pi x}{L}} \, dx\\
\end{align*}
$$
{% endraw %}

**Ejemplo: Hallar la S. F compleja de la función en [-π, π]:**
    
{% raw %}
$$
\begin{align*}
f(t)&=\cos(\frac{t}{2})\\
\end{align*}
$$
{% endraw %}
**Solución:**
Notamos que la función es periodica de periodo 2π, por lo tanto, L=π. <br>

Cálculamos el coeficiente c_n:

{% raw %}
$$
\begin{align*}
c_n&=\frac{1}{2\pi}\int_{-\pi}^{\pi} f(t) e^{-i\frac{n\pi t}{\pi}} \, dt\\
&=\frac{1}{2\pi}\int_{-\pi}^{\pi} \cos(\frac{t}{2}) e^{-in t} \, dt\\
&=\frac{1}{2\pi}\int_{-\pi}^{\pi} (\frac{e^{i\frac{t}{2}} + e^{-i\frac{t}{2}}}{2})  e^{-in t} \, dt\\
&=\frac{1}{4\pi}\int_{-\pi}^{\pi} (e^{i\frac{t}{2}} + e^{-i\frac{t}{2}})  e^{-in t} \, dt\\
&=\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{i\frac{t}{2}} e^{-in t} \, dt +\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{-i\frac{t}{2}} e^{-in t} \, dt\\
&=\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{i(\frac{t}{2}-nt)} \, dt +\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{-i(\frac{t}{2}+nt)} \, dt\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i(\frac{t}{2}-nt)}}{i(\frac{1}{2}-n)} \biggr]_{-\pi}^{\pi} +\frac{1}{4\pi} \biggl[ \frac{e^{-i(\frac{t}{2}+nt)}}{-i(\frac{1}{2}+n)} \biggr]_{-\pi}^{\pi}\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)} -\frac{e^{-i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)}  + \frac{e^{-i(\frac{1}{2}+n)\pi}}{-i(\frac{1}{2}+n)} -\frac{e^{i(\frac{1}{2}+n)\pi}}{-i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)} -\frac{e^{-i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)}  - \frac{e^{-i(\frac{1}{2}+n)\pi}}{i(\frac{1}{2}+n)} +\frac{e^{i(\frac{1}{2}+n)\pi}}{i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i\frac{\pi}{2}} e^{-in\pi}}{i(\frac{1}{2}-n)} -\frac{e^{-i\frac{\pi}{2}} e^{-in\pi}}{i(\frac{1}{2}-n)}  - \frac{e^{-i\frac{\pi}{2}} e^{ in\pi}}{i(\frac{1}{2}+n)} +\frac{e^{i\frac{\pi}{2}} e^{in\pi}}{i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{i(-1)^n }{i(\frac{1}{2}-n)} -\frac{-i(-1)^n }{i(\frac{1}{2}-n)}  - \frac{-i(-1)^n}{i(\frac{1}{2}+n)} +\frac{i(-1)^n}{i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{2(-1)^n }{(\frac{1}{2}-n)} +\frac{2(-1)^n}{(\frac{1}{2}+n)} \biggr]\\
&=\frac{(-1)^n}{2\pi} \biggl[ \frac{1 }{(\frac{1}{2}-n)} +\frac{1}{(\frac{1}{2}+n)}\biggr]\\
&=\frac{(-1)^n}{2\pi} \biggl[ \frac{2 }{(1-2n)} +\frac{2}{(1+2n)}\biggr]\\
&=\frac{(-1)^n}{\pi} \biggl[ \frac{1 }{(1-2n)} +\frac{1}{(1+2n)}\biggr]\\
&=\frac{(-1)^n}{\pi} \biggl[ \frac{2 }{(1-4n^2)} \biggr]\\

\end{align*}


$$
{% endraw %}

Por lo tanto, la serie de Fourier de la función es:

{% raw %}
$$
\begin{align*}
f(t)&=\frac{2}{\pi} \sum_{n=-\infty}^{+\infty} \quad \frac{(-1)^n}{(1-4n^2)} e^{in t}\\
\end{align*}
$$
{% endraw %}

Al usar la serie de Fourier compleja, se obtiene un resultado más corto y fácil de calcular que usando la serie de Fourier real. Además, la serie de Fourier compleja es más fácil de manipular que la serie de Fourier real. Por ejemplo, la serie de Fourier compleja es más fácil de derivar e integrar que la serie de Fourier real.

### Recordar las siguientes propiedades de la exponencial compleja:
{% raw %}
$$
\begin{align*}
e^{i\theta}&=\cos(\theta)+i\sin(\theta)\\
e^{-i\theta}&=\cos(\theta)-i\sin(\theta)\\
\cos(\theta)&=\frac{e^{i\theta}+e^{-i\theta}}{2}\\
\sin(\theta)&=\frac{e^{i\theta}-e^{-i\theta}}{2i}\\
\cosh(\theta)&=\frac{e^{\theta}+e^{-\theta}}{2}\\
\sinh(\theta)&=\frac{e^{\theta}-e^{-\theta}}{2}\\
\end{align*}
$$
{% endraw %}
### Recordar también que:
{% raw %}
$$
\begin{align*}
\cos(n\pi)&= \cos(-n\pi)={(-1)}^{n}\\
\sin(n\pi)&=0\\
\cos(\frac{n\pi}{2})&=0\\
\sin(\frac{n\pi}{2})&= \sin(-\frac{n\pi}{2})={(-1)}^{n+1}\\
\end{align*}
$$
{% endraw %}

Con estas propiedades podemos calcular la serie de Fourier compleja de una función de forma más fácil y rápida.

