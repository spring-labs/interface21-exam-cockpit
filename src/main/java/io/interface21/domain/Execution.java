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

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

import lombok.Getter;

/**
 * An Execution reflects the actual exam execution.
 *
 * @author <a href="mailto:scherrer@openwms.org">Heiko Scherrer</a>
 * @version 1.0
 * @since 1.0
 */
@Entity
@Getter
public class Execution extends Exam {

    /** The candidate who is taking the exam. */
    @ManyToOne
    private Candidate candidate;
    /** When the execution has been taken. */
    private LocalDateTime dateTaken;
    /** When the execution has been started*/
    private LocalDateTime dateStarted;
    /** Number of achieved score points. */
    private BigDecimal achievedPoints;
    /** Did the candidate pass the exam ?*/
    private boolean passed = false;
    /** The candidates chosen or given answers. */
    @OneToMany
    private Set<AnswerDefinition> answers;
}
