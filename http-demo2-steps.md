## Http Demo with JSON Server

### Launch Dummy JSON Server

1.	Open CMD (Command prompt)
2.	create directory in D drive
	```
	cd \
	mkdir emp-server
	```

3.	Run following npm command to download and install json-server
	```
		npm install -g json-server
	```

4.	create new JSON file "emp.json" inside C:\emp-server directory
	```
		{
		  "employees": [
		    {
		      "id": 1,
		      "name": "Pankaj",
		      "salary": "10000"
		    },
		    {
		      "name": "David",
		      "salary": "5000",
		      "id": 2
		    }
		  ]	
		}
	```

5.	launch json-server with given file
	```
		json-server c:\emp-server\emp.json
	```

### HttpDemo2 using Employee Object
1.	