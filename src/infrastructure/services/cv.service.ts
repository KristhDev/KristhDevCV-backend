/* Contracts */
import { TimeAdapterContract } from '@domain/contracts/adapters';
import { CVServiceContract } from '@domain/contracts/services';

/* Dtos */
import { CVDto } from '@domain/dtos/portfolio';

/* Entities */
import { SkillEntity, WorkingExperienceEntity } from '@domain/entities';

export class CVService implements CVServiceContract {
    private educations = [
        {
            id: 'a9102418-644c-4c83-9307-34a710b8d6b7',
            title: 'Ingeniería en Sistemas de Computación',
            institution: 'Universidad del Norte de Nicaragua',
            start_date: '2019-02-01 00:00:00',
            end_date: '2023-03-01 00:00:00',
            is_current: false,
            created_at: '2025-01-01 00:00:00',
            updated_at: '2025-01-01 00:00:00',
        },
        {
            id: '605b329d-de75-47d7-a4b7-095ad5466dd0',
            title: 'Ingeniería en Sistemas de Computación',
            institution: 'Universidad Nacional Padre Gaspar Garcia Laviana',
            start_date: '2023-03-01 00:00:00',
            end_date: '2024-05-01 00:00:00',
            is_current: false,
            created_at: '2025-01-01 00:00:00',
            updated_at: '2025-01-01 00:00:00',
        }
    ];

    public constructor (
        private readonly timeAdapter: TimeAdapterContract
    ) {}

    /**
     * Generates the CSS for the CV.
     *
     * @return {string} The CSS for the CV.
     */
    private cvCss(): string {
        return `
            html {
                min-height: 100%;
            }

            body {
                height: 100vh
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Verdana, Geneva, Tahoma, sans-serif
            }

            main {
                display: grid;
                height: 100%;
                grid-template-columns: repeat(5, 1fr);
            }

            .photo_col {
                background-color: #5E85BB;
                display: flex;
                flex-direction: column;
                grid-column: 1 / 2;
                height: 100%;
                padding: 1.5rem;
                position: relative;
            }

            .photo_col__polygon {
                background-color: #97C7E5;
                clip-path: polygon(0 0, 80% 100%, 0 100%);
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 1;
            }

            .photo_col__img {
                position: relative;
                aspect-ratio: 1 / 1;
                border-radius: 999px;
                border: 4px solid #FFFFFF;
                margin-bottom: 2rem;
                object-fit: cover;
                width: 100%;
                z-index: 2;
            }

            .photo_col__contact {
                display: flex;
                flex-direction: column;
                position: relative;
                z-index: 2;
            }

            .photo_col__contact h2 {
                color: #FFFFFF;
                font-size: 1.25rem;
                padding-bottom: 1rem;
                width: fit-content;
            }

            .photo_col__contact p {
                color: #FFFFFF;
                font-size: 0.8rem;
            }

            .content_col {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                grid-column: 2 / 6;
                padding: 2rem;
            }

            .content_col__section {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .content_col__section h1 {
                border-bottom: 4px solid #5E85BB;
                color: #2C3240;
                font-size: 2rem;
                padding-right: 1rem;
                width: fit-content;
            }

            .content_col__section h2 {
                border-bottom: 2px solid #5E85BB;
                color: #2C3240;
                font-size: 1.25rem;
                padding-right: 1rem;
                padding-bottom: 0.25rem;
                width: fit-content;
            }

            .content_col__section p {
                color: #8A8B8C;
                font-size: 1.25rem;
            }

            .content_col__section__summary {
                color: #8A8B8C;
                font-size: 0.8rem;
            }

            .content_col__section__experience {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .content_col__section__experience__item {
                display: flex;
                flex-direction: column;
            }

            .content_col__section__experience__item h3 {
                color: #2C3240;
                font-size: 0.8rem;
                padding-right: 1rem;
                width: fit-content;
            }

            .content_col__section__experience__item h4 {
                color: #97C7E5;
                font-weight: 600;
                font-size: 0.8rem;
                padding-right: 1rem;
                width: fit-content;
            }

            .content_col__section__experience__item p {
                margin-top: 0.5rem;
                color: #8A8B8C;
                font-size: 0.8rem;
            }

            .content_col__section__education {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .content_col__section__education h3 {
                color: #2C3240;
                font-size: 0.8rem;
                padding-right: 1rem;
                width: fit-content;
            }

            .content_col__section__education h4 {
                color: #97C7E5;
                font-weight: 600;
                font-size: 0.8rem;
                padding-right: 1rem;
                width: fit-content;
            }

            .content_col__section__education p {
                margin-top: 0.5rem;
                color: #8A8B8C;
                font-size: 0.8rem;
            }

            .content_col__section__education__item {
                display: flex;
                flex-direction: column;
            }

            .content_col__section__skills {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .content_col__section__skills__item h3 {
                color: #2C3240;
                font-size: 0.8rem;
                padding-right: 1rem;
                width: fit-content;
            }

            .content_col__section__skills__item p {
                color: #8A8B8C;
                font-size: 0.8rem;
            }
        `;
    }

    /**
     * Generates the photo column for the CV.
     *
     * @param {string} authorImage The author's image URL.
     * @return {string} The generated photo column HTML.
     */
    private generatePhotoCol(authorImage: string): string {
        return `
            <div class="photo_col">
                <div class="photo_col__polygon"></div>

                <img 
                    alt="Foto de Kristhian Ferrufino"
                    class="photo_col__img" 
                    src="${ authorImage }"
                >

                <div class="photo_col__contact">
                    <h2>Contacto</h2>

                    <p>Jinotega, Nicaragua</p>
                    <p>kristhdev@gmail.com</p>
                    <p>+505 8639-4650</p>
                    <p>https://kristhdev.vercel.app</p>
                    <p>https://github.com/KristhDev</p>
                    <p>https://www.linkedin.com/in/kristhian-ferrufino-528bb4235</p>
                </div>
            </div>
        `;
    }

    /**
     * Generates the working experiences section for the CV.
     *
     * @param {WorkingExperienceEntity[]} workingExperiences The working experiences to generate the section for.
     * @return {string} The generated working experiences section HTML.
     */
    private generateWorkingExperiencesSection(workingExperiences: WorkingExperienceEntity[]): string {
        let template = `
            <div class="content_col__section">
                <h2>Experiencia Laboral</h2>

                <div class="content_col__section__experience">
        `;

        workingExperiences.forEach(workingExperience => {
            const startDate = this.timeAdapter.format(workingExperience.startDate, 'MMM YYYY');
            const endDateOrCurrent = (!workingExperience.isCurrent && workingExperience.endDate)
                ? this.timeAdapter.format(workingExperience.endDate, 'MMM YYYY')
                : 'Actualidad';

            template += `
                <div class="content_col__section__experience__item">
                    <h3>${ workingExperience.position } | ${ startDate } - ${ endDateOrCurrent }</h3>
                    <h4>${ workingExperience.company }</h4>
                    <p>${ workingExperience.description }</p>
                </div>
            `;
        });

        template += `
                </div>
            </div>
        `;

        return template;
    }

    /**
     * Generates the education section for the CV.
     *
     * @param {typeof this.educations} educations The educations to generate the section for.
     * @return {string} The generated education section HTML.
     */
    private generateEducationSection(educations: typeof this.educations): string {
        let template = `
            <div class="content_col__section">
                <h2>Educación</h2>

                <div class="content_col__section__education">
        `;

        educations.forEach(education => {
            const startDate = this.timeAdapter.format(education.start_date, 'MMM YYYY');
            const endDateOrCurrent = (!education.is_current && education.end_date)
                ? this.timeAdapter.format(education.end_date, 'MMM YYYY')
                : 'Actualidad';

            template += `
                <div class="content_col__section__education__item">
                    <h3>${ education.title }</h3>
                    <h4>${ education.institution }</h4>
                    <p>${ startDate } - ${ endDateOrCurrent }</p>
                </div>
            `;
        });

        template += `
                </div>
            </div>
        `;

        return template;
    }

    /**
     * Generates the skills section for the CV.
     *
     * @param {SkillEntity[]} skills The skills to generate the section for.
     * @return {string} The generated skills section HTML.
     */
    private generateSkillsSection(skills: SkillEntity[]): string {
        const skillsByTypes = {
            languages: {
                label: 'Lenguajes',
                skills: skills.filter(skill => skill.type === 'language')
            },
            frameworks: {
                label: 'Frameworks',
                skills: skills.filter(skill => skill.type === 'framework')
            },
            databases: {
                label: 'Bases de Datos',
                skills: skills.filter(skill => skill.type === 'database')
            },
            baas: {
                label: 'BAAS',
                skills: skills.filter(skill => skill.type === 'baas')
            },
            tools: {
                label: 'Herramientas',
                skills: skills.filter(skill => skill.type === 'tool')
            }
        }

        let template = `
            <div class="content_col__section">
                <h2>Habilidades</h2>

                <div class="content_col__section__skills">
        `;

        Object.values(skillsByTypes).forEach(({ label, skills }) => {
            template += `
                <div class="content_col__section__skills__item">
                    <h3>${ label }</h3>
                    <p>${ skills.map(skill => skill.name).join(', ') }</p>
                </div>
            `;
        });

        template += `
                </div>
            </div>
        `;

        return template;
    }

    /**
     * Generates the content column for the CV.
     *
     * @param {string} summary The summary to generate the content column for.
     * @param {WorkingExperienceEntity[]} workingExperiences The working experiences to generate the content column for.
     * @param {SkillEntity[]} skills The skills to generate the content column for.
     * @return {string} The generated content column HTML.
     */
    private generateContentCol(summary: string, workingExperiences: WorkingExperienceEntity[], skills: SkillEntity[]): string {
        const workingExperiencesSection = this.generateWorkingExperiencesSection(workingExperiences);
        const educationsSection = this.generateEducationSection(this.educations);
        const skillsSection = this.generateSkillsSection(skills);

        return `
            <div class="content_col">
                <div class="content_col__section">
                    <h1>Kristhian Ferrufino</h1>
                    <p>Desarrollador Web</p>
                </div>

                <p class="content_col__section__summary">${ summary }</p>

                ${ workingExperiencesSection }
                ${ educationsSection }
                ${ skillsSection }
            </div>
        `;
    }

    /**
     * Generates the CV template.
     *
     * @param {CVDto} cvDataDto The CV data to generate the template for.
     * @return {string} The generated CV template HTML.
     */
    public generateCVTemplate(cvDataDto: CVDto): string {
        const css = this.cvCss();
        const photoCol = this.generatePhotoCol(cvDataDto.authorImage);
        const contentCol = this.generateContentCol(cvDataDto.summary, cvDataDto.workingExperiences, cvDataDto.skills);

        let template = `
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta charset="UTF-8" />
                <title>Descargar Kristhian Ferrufino CV</title>
                <style>${ css }</style>
            </head>

            <body>
                <main>
                    ${ photoCol }
                    ${ contentCol }
                </main>
            </body>
            </html>
        `;

        template += `
                    </main>
                </body>
            </html>
        `;

        return template;
    }
}