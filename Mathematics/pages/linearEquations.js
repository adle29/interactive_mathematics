<!DOCTYPE html>

<html>
    <meta charset="UTF-8" />

	<head>
		 <!--<link rel="stylesheet" href="default.css" type="text/css" media="all" />-->
		 <link rel="stylesheet" href="stylesheet.css" type="text/css" media="all" />
		 <script type="text/javascript" src="jsxgraphcore.js"></script>
		 
		 <script type="text/javascript" src="jquery/jquery-1.7.1.min.js"></script>
		 <script type="text/javascript" src="jquery/jquery-ui-1.8.17.custom.min.js"></script>

		 <script type="text/javascript" src="http://www.suluclac.com/lib/ASCIIMathML.js"></script>
		 <script type="text/javascript" src="http://www.suluclac.com/MathJax/MathJax.js?config=default"></script>
		

		 <title>Linear Equations</title>
	</head>
	
	
	<body onload='start()' >
		
           <!-- HEADER -->
            <div id="header_wrap" class="outer">
				<header class="inner">
					<h2 id="project_tagline">Interactive Mathematics</h2>
					<h1 id="project_title">Linear Equations</h1>
				</header>
           </div>
            
            <div id="main_content_wrap" class="outer">
            <ul>
            <a id="forkme_banner" href="http://adle29.github.com/interactive_mathematics/index.html">Home</a>
			<a id="forkme_banner" href="http://adle29.github.com/interactive_mathematics/Mathematics/index.html">Mathematics</a>
            </ul>
            
            <!-- MAIN CONTENT -->
             <section id="main_content" class="inner">
             <h5> In this section, you will find the Laws of Exponents, examples, and also
             	an interactive quiz. Enjoy!</h4>
             	
             	
             	
             	<div class='jxgbox' style='width:600px; height:300px;'> 
             		<input type="button" class="but" value='New Problem' onclick="news();" />
             		<input type="button" class="but" value='Solution' onclick="solution();" />
             		<p></p>
             		<br></br>
             		
             		<p type="text" id='ques' class='text' style=' width:300px; height:100px;'" ></p>
             		<div> <p style='margin:10px;'>Enter your answer. </p></div>
             		
             		<input id='ans' type="text"  class='text'  style='float:left;'/>
             		
             		<input type="button" class="but" value='Enter' onclick="check();" />
             		
             		<input type="button" class="but" value='Erase' onclick="erase();" />
             		
             		
             	</div> 
             	<p>If you need to practice more, here is a randomly generated worksheet.</p>
             	<a class='but' href='worksheet.html'>Worksheet</a>

             	<br></br><br></br>
             	<script type="text/javascript" src="Exponents.js"></script> 
             	
				<h5> Definition:</h5>
				<p> $a^n$= $a*a*a*a$..., that is, the number written in the upper right-hand corner
				is called the exponent or power, and it tells how many times the other number
				(called the base) is multiplied times itself. If an exponent cannot be seen, it
				equal 1.<p> Ex: $5^6 = 5*5*5*5*5*5=15,625$. </p>
				<ul> 
					<p>Rule: $a^n * a^m = a^{m+n}$ ; that is, when multiplying the same base, the
					new exponent can be found by adding the exponents of the bases
					that are multiplied.  </p>
					<li> $(5^3)(5^4)=5^7$</li>
					<li> $(x^2)(x)=x^3$</li>
					<p>Rule: $a^n/a^m = a^{n-m}$; that is, when dividing the same base, the new 
					exponent can be found  by subtracting the exponents of the bases
					that are divided. The new base and exponent go either in the numerator
					or in the denominator, wherever goes the highest exponent was located 
					in the original problem. Remember the signs' laws. 
					 </p>
					
					Ex: 
					<li> $(7^5)/(7^2)=7^3$</li>
					<li> $(3^4)/(3^6)=3^(-2)=1/(3^2)$</li>
					
					<p>Rule: $a^(-n)=1/a^n$; that is, a negative exponent can be changed to a
					positive exponent by moving the base to the other section of the fraction;
					numerator goes to denominator or denominator goes to numerator.  </p>
					
					Ex: 
					<li> $7^{-3}=1/(7^3)$</li>
					<li> $(3^4)/(3^6)=3^(-2)=1/(3^2)$</li>
				</ul>	
				</p>
					
				
		</section>
		</div>
       
       <!-- FOOTER  -->
    <div id="footer_wrap" class="outer">
      <footer class="inner">
        <p class="copyright">Website maintained by <a>Abraham Adberstein</a></p>
      
      </footer>
    </div>
 
		
        
    </body>  
</html> 