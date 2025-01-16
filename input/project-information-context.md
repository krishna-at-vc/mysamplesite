# ImportantConfigurations
## use the following values when creating any component
Project Name: mysamplesite
Sling model package prefix in Java: com.mysamplesite.core.models
Clientlib categories: mysamplesite.site
Component group name: My Sample Site - Content

# Project Structure:
Important folder structure of the project is as follows:
mysamplesite
├── core (all the java classes to be created under this folder)
├── ui.apps   
    ├── src\main\content\jcr_root\apps\mysamplesite\components (Sightly code, component defnition xml file, component dialog xml file, cq:editconfig file to be created under this folder)
    ├── src\main\content\jcr_root\apps\mysamplesite\clientlibs (all client libs including css and js files for component to be created under this folder based on existing client libs)
├── ui.config (Environment specific config files to be created under this folder)
├── pom.xml (all the dependencies to be created under this folder)

