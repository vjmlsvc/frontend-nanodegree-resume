/** set to the placeholder tag that is getting replaced in helper.js */
var data = "%data%";

var work = {
    /** 
     *  holds information on jobs worked and a display() function which
     *  formats it and appends it to the appropriate part of the html
     *  file
     */
    "jobs": [{
        "employer": "Edgewater Casino",
        "title": "Floor Manager",
        "dates": "November 2012 - present",
        "description": "I'm the real-time scheduler and manager of dozens " +
            "of employees in a fast paced high stakes work environment. My " +
            "responsibilities cover optimally utilizing a large team of " +
            "people with varied skills and abilities, conflict resolution, " +
            "problem solving, and making management decisions involving " +
            "customers. I draw upon years of experience, my excellent " +
            "interpersonal and communication skills, and a thorough " +
            "understanding of rules and regulations.",
        "location": "Vancouver, BC"
    }, {
        "employer": "Bank of Montreal Dunbar Village",
        "title": "Customer Service Representative",
        "dates": "March 2011 - January 2012",
        "description": "Customer service and sales focused role with a " +
            "focus on attention to detail and problem solving. Helped " +
            "improve the branch rating from one of the poorer performers " +
            "in the Lower Mainland to one of the strongest through a " +
            "combination of efficiency and service improvements.",
        "location": "Vancouver, BC"
    }, {
        "employer": "It has to works",
        "title": "3D Modeller and Texture Artist",
        "dates": "May 2009 - December 2010",
        "description": "Worked as a generalist covering a wide variety of " +
            "roles as part of a small team. Learned and used many " +
            "different software solutions in order to tackle an ever-" +
            "changing project. As the team was working from separate " +
            "locations documentation, version control, and coordination " +
            "were crucial, including being able to make and follow a " +
            "detailed schedule.",
        "location": "telecommuting"
    }, {
        "employer": "Rainmaker Entertainment",
        "title": "3D Modeller and Texture Artist",
        "dates": "April 2008 - April 2009",
        "description": "Modelled and textured a range of characters and " +
            "objects as part of two different teams. Worked on several " +
            "video games, trailers, as well as feature length animations. " +
            "Was part of a large team utilizing daily reviews to ensure " +
            "consistency.",
        "location": "Vancouver, BC"
    }, {
        "employer": "River Rock Casino Resort",
        "title": "Table Games Dealer and Supervisor",
        "dates": "June 2001 - May 2006",
        "description": "As a croupier primarily dealing poker I was part " +
            "of the team that brought the poker boom to British Columbia. " +
            "The job demanded focus, attention to detail, and " +
            "multitasking. In my role as Supervisor my role extended to " +
            "finding how to best utilize the varied skill sets of my co-" +
            "workers.",
        "location": "Richmond, BC"
    }],

    display: function() {
        /** 
         *  appends information for jobs starting with the appropriate
         *  header and appending info from this.jobs formatted using
         *  helper.js
         */
        for (var i = 0; i < this.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(data,
                this.jobs[i].employer);

            var formattedLocation = HTMLworkLocation.replace(data,
                this.jobs[i].location);

            var formattedTitle = HTMLworkTitle.replace(data,
                this.jobs[i].title);

            var formattedDate = HTMLworkDates.replace(data,
                this.jobs[i].dates);

            var formattedDescription = HTMLworkDescription.replace(data,
                this.jobs[i].description);

            $(".work-entry:last").append(formattedEmployer +
                formattedLocation + formattedTitle + formattedDate +
                formattedDescription);
        }
    }
};

var projects = {
    /** 
     *  holds information on projects worked on and a display()
     *  function which formats it and appends it to the appropriate
     *  part of the html file
     */
    "projects": [{
        "title": "Creamed",
        "description": "Contributed art and code to a Unity game as part " +
            "of a small team.",
        "dates": "January 2016 - present",
        "code": ["C#"],
        "software": ["Unity", "XSI", "Photoshop"],
        "teamSize": "5 people",
        "images": ["https://unsplash.it/250", "https://unsplash.it/250"]
    }, {
        "title": "300 Algorithms",
        "description": "Wrote a total of 300 algorithms solving problems " +
            "sourced from Project Euler, Codecademy, and FreeCodeCamp.",
        "dates": "September - October 2016",
        "code": ["JavaScript"],
        "teamSize": "Solo",
        "images": ["https://unsplash.it/250", "https://unsplash.it/250"]
    }, {
        "title": "Callisandre",
        "description": "Provided automation scripting and art assets for a " +
            "small upstart based in Belgium.",
        "dates": "May 2009 - December 2010",
        "code": ["Python"],
        "software": ["Maya", "XSI", "Photoshop"],
        "teamSize": "3 people",
        "images": ["https://unsplash.it/250", "https://unsplash.it/250"]
    }],

    display: function() {
        /** 
         *  appends the header followed by info from this.projects
         *  formatted using helper.js to #projects. also checks whether
         *  the fields "code" and "images" exist for each project entry
         *  and appends info in them if available
         */
        for (var i = 0; i < this.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = this.projects[i].hasOwnProperty("code") ? (
                HTMLprojectTitle.replace(data, this.projects[i].title +
                    " - " + this.projects[i].code)
            ) : (
                HTMLprojectTitle.replace(data, this.projects[i].title)
            );

            var formattedDate =
                HTMLprojectDates.replace(data, this.projects[i].dates);

            var formattedDescription = HTMLprojectDescription.replace(data,
                this.projects[i].description);

            $(".project-entry:last").append(formattedTitle + formattedDate +
                formattedDescription);

            if (this.projects[i].hasOwnProperty("images")) {
                for (var j = 0; j < this.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace(data,
                        this.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

var bio = {
    /** 
     *  holds information on the author of the resume and a display()
     *  function which calls 4 different display functions for each
     *  part of the bio. originally I had this working using a string
     *  input and a switch, but the project grading requirements didn't
     *  allow for it. the individual display functions contain further
     *  comments
     */
    "name": "Voja Milosevic",
    "role": "Junior Developer",
    "contacts": {
        "email": "vjmlsvc@gmail.com",
        "twitter": "@vjmlsvc",
        "github": "vjmlsvc",
        "mobile": "(778)227-XXXX",
        "location": "Vancouver, BC"
    },
    "biopic": "http://unsplash.it/300",
    "welcomeMessage": "I'm a JavaScript, C#, and Python developer " +
        "looking for his first programming job!",
    "skills": ["html", "css", "javascript", "python", "C#"],

    display: function() {
        this.displayWelcome();
        this.displaySkills();
        this.displayContacts();
        this.displayPersonal();
    },
    /*
    display: function(displayType) {
        switch (displayType) {
            case "skills":
                this.displaySkills();
                break;
            case "contacts":
                this.displayContacts();
                break;
            case "personal":
                this.displayPersonal();
                break;
            case "welcome":
                this.displayWelcome();
                break;

            default:
                alert("Missing display type in bio.display()");
        }
    },
    */
    displayWelcome: function() {
        /** 
         *  appends this.welcomeMessage to #header formatted using
         *  helper.js
         */
        var welcome = HTMLwelcomeMsg.replace(data, this.welcomeMessage);
        $("#header").append(welcome);
    },

    displaySkills: function() {
        /** 
         *  iterates through this.skills and appends the appropriate
         *  header followed by formatted skill information to #skills
         */
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < this.skills.length; i++) {
                var formattedSkill = HTMLskills.replace(data, this.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    },

    displayContacts: function() {
        /** 
         *  prepends this.contact information formatted using helper.js
         *  to #topContacts and #footerContacts
         */
        var email = HTMLemail.replace(data, this.contacts.email);
        var github = HTMLgithub.replace(data, this.contacts.github);
        var twitter = HTMLtwitter.replace(data, this.contacts.twitter);
        var mobile = HTMLmobile.replace(data, this.contacts.mobile);
        var location = HTMLlocation.replace(data, this.contacts.location);
        var combinedContacts = email + github + twitter + mobile + location;

        $("#topContacts, #footerContacts").prepend(combinedContacts);
    },

    displayPersonal: function() {
        /** 
         *  prepends this.name, this.role, and this.biopic formatted
         *  using helper.js to #header
         */
        var formattedName = HTMLheaderName.replace(data, this.name);
        var desiredRole = HTMLheaderRole.replace(data, this.role);
        var pic = HTMLbioPic.replace(data, this.biopic);

        $("#header").prepend(pic);
        $("#header").prepend(desiredRole);
        $("#header").prepend(formattedName);
    }
};

var education = {
    /** 
     *  holds information on schools and online courses taken and a
     *  display() function
     */
    "schools": [{
        "name": "Vancouver Film School",
        "location": "Vancouver, BC",
        "degree": "Diploma",
        "dates": "September 2006 - December 2007",
        "majors": ["3D Animation and Visual Effects"],
        "url": "https://www.vfs.edu"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Intro to Programming",
        "degree": "Nanodegree",
        "dates": "January - February 2017",
        "url": "https://www.udacity.com/course/intro-to-programming-" +
            "nanodegree--nd000"
    }, {
        "school": "Udacity",
        "title": "Front-end Developer",
        "degree": "Nanodegree",
        "dates": "February - May 2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-" +
            "nanodegree--nd001"
    }],

    display: function() {
        /** 
         *  iterates through this.schools and this.onlineCourses and
         *  appends the appropriate header followed by info formatted
         *  using helper.js to #education. used to work using one
         *  display() function and a string attribute, but the specs do
         *  not allow this, and it used alternate naming
         */
        for (var i = 0; i < this.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace(data,
                this.schools[i].name).replace("#", this.schools[i].url);

            var formattedLocation = HTMLschoolLocation.replace(data,
                this.schools[i].location);

            var formattedDate = HTMLschoolDates.replace(data,
                this.schools[i].dates);

            for (var j = 0; j < this.schools[i].majors.length; j++) {
                var formattedMajor = HTMLschoolMajor.replace(data,
                    this.schools[i].majors[j]);
            }

            var formattedDegree = HTMLschoolDegree.replace(data,
                this.schools[i].degree);

            $(".education-entry:last").append(formattedName +
                formattedLocation + formattedDate + formattedMajor +
                formattedDegree);
        }
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < this.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineClass = HTMLonlineTitle.replace(
                data, this.onlineCourses[j].title).replace(
                "#", this.onlineCourses[j].url);

            var formattedOnlineDate = HTMLonlineDates.replace(data,
                this.onlineCourses[j].dates);

            var formattedOnlineSchool = HTMLonlineSchool.replace(data,
                this.onlineCourses[j].school);

            $(".education-entry:last").append(formattedOnlineClass +
                formattedOnlineSchool + formattedOnlineDate);
        }
    }

    /*
    display: function(eduType) {
        for (var i = 0; i < this[eduType].length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace(data,
                this[eduType][i].name);

            var formattedDate = HTMLschoolDates.replace(data,
                this[eduType][i].dates);

            var formattedMajor = HTMLschoolMajor.replace(data,
                this[eduType][i].majors);

            var formattedDegree = HTMLschoolDegree.replace(data,
                this[eduType][i].degree);

            $(".education-entry:last").append(formattedName + formattedDate +
                formattedMajor + formattedDegree);
        }
    }*/
};

function mapDisplay() {
    /** appends googleMap from helper.js to #map */
    $("#map").append(googleMap);
}

projects.display();
work.display();
education.display();
bio.display();
mapDisplay();

/*
$("#main").append(internationalizeButton);
*/

