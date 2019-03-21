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
				request.getRequestDispatcher("page2"); // Relative path
		view.forward(request, response);
		out.close();

7.	Run on Server
	
	NOTE: Final response is from Page2Servlet only!

## Servlet Context and Request Dispatcher
	ServletContext context = getServletContext(); //Method from HttpServlet
	RequestDispatcher view = 
				context.getRequestDispatcher("/MyApp/page2"); // Absolute path
		view.forward(request, response);

## Request Attributes

8.	Modify "doGet" method for "Page1Servlet":

		Date date = new Date();
		
		//Storing data (attribute) for use by next servlet
		request.setAttribute("today", date);
		
		//Include dispatcher for page2
		RequestDispatcher view = 
				request.getRequestDispatcher("page2");
		//Request Forwarding (current servlet consume request
		//	but produces no output)
		view.forward(request, response);
		
9.	Modify "doGet" method for "Page2Servlet"

		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		//Retrieve Attribute from request
		Object today = request.getAttribute("today");
		out.println("Welcome to page2");
		out.println("Today is "+today);
		out.close();

## Redirecting Client (Response) to next servlet/page

	When redirection happens, address (url) in browser changes

10.	Modify "doGet" method of Page1Servlet

		Date date = new Date();
		
		//Cannot use "request" scopped attributes
		//As, this would create new request & response
		response.sendRedirect("page2?date="+date);

11.	Modify "doGet" method of Page2Servlet

		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		String date=request.getParameter("date");
		out.println("Welcome to page2");
		out.println("Today is "+date);
		out.close();


NOTES:
	1.	Internal Dispatches (view.forward & view.include) can be used with SAME METHOD types
		doGet ==> doGet and doPost ==> doPost
	2.	Redirecting Response (response.sendRedirect) can be used with different method types
		doPost ==> doGet and doGet ==> doGet 






