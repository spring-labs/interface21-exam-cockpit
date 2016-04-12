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

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.Min;
import java.math.BigDecimal;
import java.util.Set;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * A MultipleChoiceQuestion is a question that allows to select more than one answers.
 *
 * @author <a href="mailto:scherrer@openwms.org">Heiko Scherrer</a>
 * @version 1.0
 * @since 1.0
 */
@Entity
@DiscriminatorValue("MULTIPLE")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
class MultipleChoiceQuestion extends Question<CheckableAnswerDefinition> {

    /** Possible answers this question has. */
    @OneToMany(mappedBy = "question", targetEntity = AnswerDefinition.class)
    @Min(2)
    private Set<CheckableAnswerDefinition> answers;

    protected MultipleChoiceQuestion(String text, int order, BigDecimal scorePoints, Set<CheckableAnswerDefinition> answers) {
        super(text, order, scorePoints);
        this.answers = answers;
    }
}
