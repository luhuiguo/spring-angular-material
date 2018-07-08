package com.luhuiguo.archetype.config;


/**
 * Constants.
 */
public final class Constants {

  // Spring profiles for development
  public static final String SPRING_PROFILE_DEVELOPMENT = "dev";

  // Spring profiles for test
  public static final String SPRING_PROFILE_TEST = "test";

  // Spring profiles for production
  public static final String SPRING_PROFILE_PRODUCTION = "prod";

  // Spring profile used when deploying with Spring Cloud
  public static final String SPRING_PROFILE_CLOUD = "cloud";

  // Spring profile used when deploying to Kubernetes and OpenShift
  public static final String SPRING_PROFILE_K8S = "k8s";

  public static final String USERNAME_REGEX = "^[_'.@A-Za-z0-9-]*$";
  public static final int PASSWORD_MIN_LENGTH = 4;
  public static final int PASSWORD_MAX_LENGTH = 100;

  public static final String SYSTEM_ACCOUNT = "system";
  public static final String ANONYMOUS_USER = "anonymousUser";
  public static final String DEFAULT_LANGUAGE = "zh-cn";

  private Constants() {
  }
}
