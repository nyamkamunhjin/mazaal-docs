import React, { FC } from 'react';
// import './open-api-renderer.module.css'

interface IProps {
    spec: any;
}

/**
 * @author
 * @function @OpenApiRenderer
 **/

export const OpenApiRenderer: FC<IProps> = ({ spec }) => {
    return (
        <div className="flex flex-col gap-8 mt-10">
            <h1 className="text-3xl font-medium">
                {spec.info.title} - {spec.info.version}
            </h1>
            <p>{spec.info.description}</p>

            {/* <h2>Endpoints</h2> */}
            <div className="flex flex-col gap-10">
                {Object.entries(spec.paths).map(([path, pathItem], index) => (
                    <div className="flex flex-col" key={path}>
                        {Object.entries(pathItem).map(([method, operation]) => (
                            <div
                                key={`${path}-${method}`}
                                className="flex flex-col gap-4"
                            >
                                <h1 className="text-3xl font-medium flex items-center gap-3" id={path}>
                                    <span className="bg-primary rounded p-1 text-sm h-full">
                                        {method.toUpperCase()}
                                    </span>
                                    {operation.summary}
                                </h1>
                                <p className="text-sm">
                                    {operation.description}
                                </p>

                                <h2 className="text-2xl font-medium m-0">
                                    {
                                        spec.tags.find(
                                            (tag) =>
                                                tag?.name ===
                                                operation?.tags?.[0]
                                        )['x-displayName']
                                    }
                                </h2>
                                <div className="nextra-code-block nx-relative first:nx-mt-0">
                                    <pre
                                        className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4"
                                        data-language="js"
                                        data-theme="default"
                                    >
                                        <code
                                            className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
                                            dir="ltr"
                                            data-language="js"
                                            data-theme="default"
                                        >
                                            <span className="line">
                                                [{method.toUpperCase()}]{' '}
                                                {spec.servers[0].url}
                                                {path}
                                            </span>
                                        </code>
                                    </pre>
                                </div>

                                <h5 className="font-medium mt-4">
                                    Authorization
                                </h5>
                                <li className="flex nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10">
                                    Bearer mz-{`{user-api-key}`}
                                </li>

                                <h5 className="font-medium mt-4">Parameters</h5>
                                <ul>
                                    {operation.parameters &&
                                        operation.parameters.map((param) => (
                                            <li
                                                className="text-sm"
                                                key={param.name}
                                            >
                                                {param.name} ({param.in}) -{' '}
                                                {param.description}
                                            </li>
                                        ))}
                                </ul>

                                <h6 className="font-medium">Request Body</h6>
                                {operation.requestBody && (
                                    <ul className="flex items-start">
                                        {Object.entries(
                                            operation.requestBody.content
                                        ).map(([contentType, schema]) => (
                                            <div className="flex flex-col gap-2 w-full">
                                                <div className='flex'>

                                                <span
                                                    className="flex nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10 items-start"
                                                    key={contentType}
                                                    >
                                                    {contentType}
                                                </span>
                                                    </div>
                                                <pre
                                                    className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4"
                                                    data-language="js"
                                                    data-theme="default"
                                                >
                                                    <code
                                                        className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
                                                        dir="ltr"
                                                        data-language="js"
                                                        data-theme="default"
                                                    >
                                                        <span className="line">
                                                            {JSON.stringify(
                                                                (schema as any)
                                                                    .example,
                                                                null,
                                                                2
                                                            )}
                                                        </span>
                                                    </code>
                                                </pre>
                                            </div>
                                        ))}
                                    </ul>
                                )}

                                <h6 className="font-medium mt-4">Responses</h6>
                                <ul>
                                    {Object.entries(operation.responses).map(
                                        ([statusCode, response]: any) => (
                                            <li
                                                className="text-sm flex flex-col gap-2 max-h-[300px]"
                                                key={statusCode}
                                            >
                                                {statusCode} -{' '}
                                                {response.description}
                                                <pre
                                                    className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4"
                                                    data-language="js"
                                                    data-theme="default"
                                                >
                                                    <code
                                                        className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
                                                        dir="ltr"
                                                        data-language="js"
                                                        data-theme="default"
                                                    >
                                                        <span className="line">
                                                            {JSON.stringify(
                                                                response
                                                                    ?.content?.[
                                                                    'application/json'
                                                                ]?.example,
                                                                null,
                                                                2
                                                            )}
                                                        </span>
                                                    </code>
                                                </pre>
                                            </li>
                                        )
                                    )}
                                </ul>

                                <h6 className="font-medium mt-4">
                                    Request Examples
                                </h6>
                                {operation['x-codeSamples'].map((each) => (
                                    <div
                                        className="flex flex-col gap-2"
                                        key={each.source}
                                    >
                                        <h6 className="text-sm font-medium">
                                            {each.label}
                                        </h6>
                                        <pre
                                            className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4"
                                            data-language="js"
                                            data-theme="default"
                                        >
                                            <code
                                                className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
                                                dir="ltr"
                                                data-language="js"
                                                data-theme="default"
                                            >
                                                <span className="line">
                                                    {each.source}
                                                </span>
                                            </code>
                                        </pre>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
