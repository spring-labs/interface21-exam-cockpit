/*
 * Copyright 2014-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.interface21.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.util.Set;

import lombok.Getter;
import org.ameba.jpa.BaseEntity;

/**
 * A Exam.
 *
 * @author <a href="mailto:scherrer@openwms.org">Heiko Scherrer</a>
 * @version 1.0
 * @since 1.0
 */
@Entity
@Table(name = "T_EXAM", uniqueConstraints = {@UniqueConstraint(name = "UC_BK_ACTIVE", columnNames = {"C_BK", "C_ACTIVE"})})
@Getter
public class Exam extends BaseEntity {

    /** A unique business key for the Exam. */
    @Column(name = "C_BK")
    private String examIdentifier;
    /** A title for the Exam. */
    private String title;
    /** Maximum points that can be achieved. */
    private int maxScorePoints;
    /** */
    private long duration;
    /** A version number of the exam. */
    private String version;
    /** Only one Exam version can be active, older versions are set to inactive. */
    @Column(name = "C_ACTIVE")
    private boolean active;
    @OneToMany
    private Set<Question> questions;

    /**
     * Dear JPA...
     */
    protected Exam() {

    }
}
