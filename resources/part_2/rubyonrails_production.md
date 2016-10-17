The Ruby on rails applications could be running with different environment flags. Development, test and production is the mot common one. In this text we should have a quick look on what to think about when running your Ruby on rails application in production.

# Install just the production gems
When developing we need gems that help us in the developing process. Stuff like tests, debugging won´t be needed in the production server and we try to hold our application as slim as possible. To ensure that you just install the "production gems" run the command `bundle install --without development test` that will exclude the test and development specific gems.

## Secrets
When you work as an developer you probably use some kind of version control system, maybe git and GitHub. When dealing with web applications you often have a secret string that will be used for hashing passwords, creating session-hashs and so on. This is a very sensitive string and should always be ignore in your repository so it will never be leaked to production. In production you should always have the secret as an environment variable (the rails application expects that as default). The easiest way to create a good secret-string is to run the command `rake secret` and update the environment needed (SECRET_KEY_BASE - look in config/secrets.yml)

## Migrate your database for production
Your database should be migrating so we run the options specified for our production demands. Maybe we have a other database manager then in development, we have more security rules (user, usernames and passwords) and the production flag will probably do some optimizing when creating the database. You will find the configuration settings in "config/database.yml". To run your database commands make sure that the environment variable RAILS_ENV is set to production or run it when executing the command.
```
rake db:migrate RAILS_ENV=production
```
This will use the production settings.

## Static files and production
When running the application in production the framework will try to optimize the application in different ways. It will remove code running just running in dev or test, like some debug code. It will also optimize the static files, mainly the css and javascript. When developing you probably write your code in many small different files but when putting them on the server you want to minify and combine these into lesser number of files (to save request to the server). The rails helps you with this (and will expect it when running in production). What you have to du is to precompile all your static files (or assets). This is done by this command:
```
rake assets:precompile RAILS_ENV=production
```
This will minify all css and javascript and compile if using SASS/LESS/Coffeescript. The generated inks will also be rewritten and point to these files. Check the source code of the running application. Be sure to restart the application.

## config/environments
The RoR-framework has different files for different envireonments. It could be a good idea to see the content in production.rb. One thing to observe is the flag config.force_ssl which is default set to ture. That means that the application will redirect all calls to port 80 to port 443. That could be problem if we are handling the HTTPS in the reversed proxy and use plain HTTP internal. 
