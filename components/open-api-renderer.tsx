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
        <div className="flex flex-col gap-4">
            <h1 className="text-lg">
                {spec.info.title} - {spec.info.version}
            </h1>
            <p>{spec.info.description}</p>

            <h2>Endpoints</h2>
            {Object.entries(spec.paths).map(([path, pathItem]) => (
                <div key={path}>
                    <h3>{path}</h3>
                    {Object.entries(pathItem).map(([method, operation]) => (
                        <div key={`${path}-${method}`}>
                            <h4>
                                {method.toUpperCase()} - {operation.summary}
                            </h4>
                            <p>{operation.description}</p>

                            <h5>Parameters</h5>
                            <ul>
                                {operation.parameters &&
                                    operation.parameters.map((param) => (
                                        <li key={param.name}>
                                            {param.name} ({param.in}) -{' '}
                                            {param.description}
                                        </li>
                                    ))}
                            </ul>

                            <h5>Request Body</h5>
                            {operation.requestBody && (
                                <ul>
                                    {Object.entries(
                                        operation.requestBody.content
                                    ).map(([contentType, schema]) => (
                                        <li key={contentType}>{contentType}</li>
                                    ))}
                                </ul>
                            )}

                            <h5>Responses</h5>
                            <ul>
                                {Object.entries(operation.responses).map(
                                    ([statusCode, response]: any) => (
                                        <li key={statusCode}>
                                            {statusCode} -{' '}
                                            {response.description}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
