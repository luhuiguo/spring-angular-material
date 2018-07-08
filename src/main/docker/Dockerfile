FROM openjdk:8-jre

ARG JAR_FILE=@project.build.finalName@.war

ADD JAR_FILE /opt/@project.artifactId@/@project.build.finalName@.war

EXPOSE 8080

ENTRYPOINT ["/usr/bin/java", "-jar", "/opt/@project.artifactId@/@project.build.finalName@.war"]
