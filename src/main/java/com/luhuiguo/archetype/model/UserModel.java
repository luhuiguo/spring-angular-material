package com.luhuiguo.archetype.model;

import com.luhuiguo.archetype.config.Constants;
import java.time.Instant;
import java.util.Set;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

/**
 * A DTO representing a user, with his authorities.
 */
@Data
public class UserModel {

  private Long id;

  @Pattern(regexp = Constants.USERNAME_REGEX)
  @Size(min = 1, max = 50)
  private String username;

  @Size(max = 50)
  private String nickname;

  @Size(max = 50)
  private String name;

  @Email
  @Size(max = 255)
  private String email;

  @Size(max = 255)
  private String phone;

  @Size(max = 255)
  private String avatar;

  private boolean activated = false;

  @Size(max = 20)
  private String langKey;

  private boolean enabled = true;

  private Set<String> authorities;

  private String createdBy;

  private Instant createdDate;

  private String lastModifiedBy;

  private Instant lastModifiedDate;

}
