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

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;

import org.ameba.app.SpringProfiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;

/**
 * A DataLoader.
 *
 * @author <a href="mailto:scherrer@openwms.org">Heiko Scherrer</a>
 * @version 1.0
 * @since 1.0
 */
@Profile(SpringProfiles.DEVELOPMENT_PROFILE)
class DataLoader implements CommandLineRunner {

    @Autowired
    private ExamRepository repo;
    /**
     * Callback used to run the bean.
     *
     * @param args incoming main method arguments
     * @throws Exception on error
     */
    @Override
    public void run(String... args) throws Exception {
        Stream.of(new Exam[]{
                new Exam("1", "Systems and Signals", 20, 5400, "1.0", false, Collections.emptySet()),
                new Exam("1", "Systems and Signals", 20, 5400, "1.1", true, buildQuestions(5))
                }).forEach(e -> repo.save(e));
    }

    private Set<Question> buildQuestions(int count) {
        Set<Question> result = new HashSet<>(count);
        return result;
    }
}