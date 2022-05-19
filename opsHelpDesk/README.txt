Symon and Matt:

This is a README file for the OpsPlaybook Content, it will sum up the state of the project currently, what still needs to be finished, and explanations of the various choices that went into the project. 
This project has been enormously fulfilling and enjoyable for me, having got so close to finishing it, I was devastated to lose a lot of data due to a complete computer falure which set this project back a considerbale way. Pre-data loss a lot of what I will include in the 'to do's' was already completed. But hopefully by taking the extra-time I have I've got it back into a place which leaves Symon only a couple of bits to do. I hope you're both well, enjoyed your long weekend (and matt your Stag do!), and hopefully I'll get to work with you again soon. 

The Ops Playbook Contains:
- the Database
- The Playbook/Helpdesk Contents Page
- The Playbook Editor
- The Content Page


The Playbook/Helpdesk Contents Page

Dependencies:
- Bootstrap 
- JQuery

Summary:
This is the central navigation hub for the playbook, it was probably the first thing created. It's incredibly simple, Symon and I have been over it a number of times in the past so i won't dwell on it too much here. Each of the accordions represents a 'topic' which will be populated from the database's 'pageTitle' field, the tabs/troubleshooting values will be populated using the databases corresposiding fields. This part of the page needs to be written. A simple fetch call, or an AJAX call will do depending on what Symon will find easier.  

To Do:

- Dynamic Link Creation
- Sorting Links into the correct Tab


The Playbook Editor ('opsHelpDesk/changer')
Dependencies:
- Node.JS
- Express JS
- NEDB (substitute this for the database you would like to use Symon)
- Tailwind css 
- JQuery
- Sortable.JS

Summary:
The place where the bulk of the work on this project took place. A purpose built editor to allow users to input into the database in a format that can be interpreted in the database, the contents page and on the individual content pages. The User can enter data in four main types:
- Headings
- Text 
- Photos
- Video Links

Headings: define the H1 headings in the content pages, used to populate the navigation sidebars.
Text: The actual text content, 
Photos: Photo Uploads (one per block)
Video Links: Links to explanation Videos.

The input is formatted into blocks, which can be dragged and dropped into any order. On Submit there MUST be:
A page Title and at least one heading. 

This choice was made so users can save pages in progress rather than having to finish them all in one go, though obviously the page won't render anything if there is no content. 

The playbook outputs in this Data Structure as JSON:

Globally Defined Values (Root Level);

Page Title: The title of the page as a whole, should define define the links in the Contents/Home Page
Team Value: Which Team Tab the content is intended for [0=Select, General, QA, PMM (Property Management & Maintenance) and Ops]
Tab Val: Which Tab the entry sits under [0 = Not Selected, 1 = Process, 2 = Procedure, 3 = Policy, 4 = Training Documentation, 5 = Troubleshooting]
Troubleshooting Value: if 5/Troubleshooting is selected this will give the block a second value to define which hading it sits under:    
[0 = --Select--
WiFi = Wifi
HHW = Heating & Hot Water
EM = Entertainment & Media
AWG = Appliances & White Goods
Elec = Electricity
Other = Other]
 

Block Level Values;

Order: Defined at submit, reads the number of blocks and assigns an autoincrementing value, which becomes the ID when it is read by the content page.
Content Type: used to hide/show the content input needed, and record the kind of content in the row when sent to the database. 
Heading: As defined in the Summary
Text: As defined in the Summary
Photo: As defined in the Summary
Video Link: As defined in the Summary

The above fields are joined in the function imported into the Index.JS file. If I were restarting this project I would have split all the functions into modules for ease later, but hopefully the comments will be enough of a guide for you Symon. The Data is then collated into objects and returned.

The below is an example of the datastructure:

[
    {
        "order" : 1,
        "pageTitle" : "Example Page Title",
        "teamVal:": 1
        "tabVal": 2
        "troubleshootingVal": 0
        "contentType" : 1,
        "heading" : "Example Heading 1",
        "text": null,
        "photo": null,
        "videoLink": null
    }
]

each 'Block' equates to a seperate JSON object which will then be POST-ed to the database to be read and interpreted. 

To Do:
- Form Validation (if you want more of it)
- Setting up the Fetch(POST) request to send the data to the database
- setting up the delete button and the confirmation of delete
- including the banner that the 'data has been submitted'
-  Database image hadling 

The Individual Content Pages:

Dependencies:
- Express.JS
- Handlebars.JS
- NEDB (again, substitute for any database you would like to use Symon, I chose this for now as it's incredibly lightweight, integrates well with JS and is document driven, MongoDB or MYSQL could work just as well, with the limited time to rebuild this is the suimplest thing I could come up with.)

Summary:

The final part of the build, the actual content page. This was the heaviest hit by the data-loss and had to be rebuilt from scratch. 
As suggested by Symon, I have created one tempate which will iterate for each of the entries in the database. The actual HTML page is empty, bar a couple of containers, which are populated by JS template literals at runtime. There are currently three main functions that fetch:

1: The actual content, and then formats it accordingly 
2: the sidebar links to take you straight to a portion of the content
3. The page title (though this one may need to be changed, as I'm not sure if it's more appropriate to pull the URL from the page title or the Page Title from the URL.) As it stands the fetch function needs a little bit of work to remove duplicate titles, initially when I tried this I used the Set method, and then tried using the filter method when mapping, but as of yet haven't actually managed to come up with a viable solution, when defining the pageTitle from the database.


To do:
- Define URLS and adapt the filter function to show only the content with the relavent 'Page Title' 
- Check the sidebar navigation links
- Add any extra formatting you'd like. 
- adding the @media queries to make this more responsive, currently it's more static than I would have liked. 



Hopefully this documentation is thorough enough, if you have any questions/issues/problems you would like to go over, I can be reached at:
email: okoronka@gmail.com
mobile: 07949451301


