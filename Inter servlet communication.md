## Inter servlet communication

1. Create a servlet
	classname:		Page1Servlet
	url-Mapping:	/page1

	Inside "doGet" method of newly created servlet, add following code:

		Date date = new Date();
		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		out.println("Hi, Today is "+date);
		out.close();

2. Create a servlet
	
	classname:		Page2Servlet
	url-Mapping:	/page2

	Inside "doGet" method of newly created servlet, add following code:

		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		out.println("Welcome to page2");
		out.close();

3.  Run on Server!
	
		Visit http://localhost:8081/MyApp1/page1
		Visit http://localhost:8081/MyApp1/page2


4.  Open Page1Servlet, and make changes to doGet method

		Date date = new Date();
		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		out.println("Hi, Today is "+date);		
		//Include dispatcher for page2
		RequestDispatcher view = 
				request.getRequestDispatcher("page2");
		view.include(request, response);
		out.close();

5.	Run on server!
	
		visit http://localhost:8081/MyApp/page1


6.	Open Page1Servlet, and make changes to doGet method
		
		Date date = new Date();
		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		out.println("Hi, Today is "+date);
		//Include dispatcher for page2
		RequestDispatcher view = 
				request.getRequestDispatcher("page2");
		view.forward(request, response);
		out.close();

7.	Run on Server
	
	NOTE: Final response is from Page2Servlet only!
