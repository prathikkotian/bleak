# Bleak Password
It has been identified that 1.4 billion passwords have been compromised in the past and have been circulating around the internet in the form of a 41GB text file. For an attacker with access to a database of leaked passwords, they will attempt to guess the end-user passwords using this data.

This project consists of open source Java and Javascript libraries that can be integrated into applications by developers and can be used to check whether passwords have been compromised in the past or not.

These libraries perform this functionality by converting the 41GB leaked password file into 530MB using bloom filters. The queries are then performed on the converted file. This makes it very efficient in terms of performance (response time in milliseconds) and secure as the password check is done in a completely offline manner without any interactions with third party databases and applications. Also the solution is completely de-centralized and there is no single point of failure as compared to online APIs. 

The advantages of using the bloom filter approach is that, its space efficient and there are no possibility for false negatives. In our case a compromised password will never be returned as safe. But on the other hand, one of the drawbacks in using bloomfilter approach to compress the file, is the occurence of false positives. For example, in our case a valid password may be returned as compromised. There is 1% chance (1 in 100 passwords) of this occuring when our library is used. But considering that all we need to do is select a new password, the pros definitely outweigh the cons.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#####Note: This library is compatible with client js and works on browser. Currently it is not compatible with server side js.

#### Java Version of library:
The java version of the library that can be downloaded through maven is also available and can be installed from "GitHublink"

## Password Check
### Installing

#### Using npm

Use the below npm command to download 
```
npm install --save BleakJS
```


In the html file where the library needs to be invoked
```
<script src='><path>/node_modules/distribution/bleakbundle.min.js'></script>
```
The above command will include the library in the target application.

To perform the password check function use
```
bleak.checkPassword('<password_to_check>', function(result) {
	return result;
});
```
The above function returns true or false. True - if password is compromised, false if not.

####Using GitHub

After downloading the package from github,

```
copy the dsitribution folder into your application workspace
```

In the html file where the library needs to be invoked
```
<script src='<path>/distribution/bleakbundle.min.js'></script>
```

To perform the password check function use
```
bleak.checkPassword('<password_to_check>', function(result) {
	return result;
});
```

When publishing on server make sure the entire distribution folder comprising of the bleakbundle.min.js and bleakcheck.bin is copied to server directory.


#####Note:
For detailed information please do refer the SoftwareArchitectureDocument under docs folder. 

## Running the tests
For running the tests make sure the application is running on a server.
Open the TestRunner.html file (under the tests folder) in the browser and the tests should be executed.

## GitHub link:

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors
* **Kavya Singaravel**
* **Lakshmi Abhigna Batchu**
* **Prathik Kotian** 
 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the CMU,TripleCheck License

