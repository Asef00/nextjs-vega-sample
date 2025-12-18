'use client';

import { useEffect, useRef, useState } from 'react';
import { isEmpty } from 'lodash';
import { TopLevelSpec, compile } from 'vega-lite';
import embed, { EmbedOptions, Result } from 'vega-embed';
import ChartSpecHandler from './handler';

const embedOptions: EmbedOptions = {
  mode: 'vega-lite',
  renderer: 'svg',
  tooltip: { theme: 'custom' },
  actions: {
    export: true,
    editor: false,
  },
};

interface ChartProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  spec?: TopLevelSpec;
  values?: Record<string, any>[];
  autoFilter?: boolean;
  hideTitle?: boolean;
  hideLegend?: boolean;
  forceUpdate?: number;
}

export default function Chart(props: ChartProps) {
  const {
    className,
    spec,
    values,
    width = 600,
    height = 320,
    autoFilter,
    hideTitle,
    hideLegend,
    forceUpdate,
  } = props;

  const [donutInner, setDonutInner] = useState<number | null>(null);
  const [parsedSpec, setParsedSpec] =
    useState<ReturnType<typeof compile>['spec'] | null>(null);
  const [parsedError, setParsedError] = useState<string | null>(null);
  const [isShowTopCategories, setIsShowTopCategories] = useState(false);
  const $view = useRef<Result | null>(null);
  const $container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spec || !values) return;
    try {
      const specHandler = new ChartSpecHandler(
        {
          ...spec,
          data: { values },
        },
        {
          donutInner: donutInner || undefined,
          isShowTopCategories: autoFilter || isShowTopCategories,
          isHideLegend: hideLegend,
          isHideTitle: hideTitle,
        },
      );
      const chartSpec = specHandler.getChartSpec();
      const isDataEmpty = isEmpty((chartSpec?.data as any)?.values);
      if (isDataEmpty) {
        setParsedSpec(null);
      } else {
        const compiled = compile(chartSpec, { config: specHandler.config });
        setParsedSpec(compiled.spec);
      }
    } catch (error: any) {
      console.error(error);
      setParsedError(error?.message || 'Failed to render chart');
    }
    return () => {
      setParsedSpec(null);
      setParsedError(null);
    };
  }, [spec, values, isShowTopCategories, donutInner, forceUpdate, autoFilter, hideLegend, hideTitle]);

  // initial vega view
  useEffect(() => {
    if ($container.current && parsedSpec) {
      embed($container.current, parsedSpec, embedOptions).then((view) => {
        $view.current = view;
      });
    }
    return () => {
      if ($view.current) $view.current.finalize();
    };
  }, [parsedSpec, forceUpdate]);

  useEffect(() => {
    if ($container.current) {
      setDonutInner($container.current.clientHeight * 0.15);
    }
  }, [forceUpdate]);

  const onShowTopCategories = () => {
    setIsShowTopCategories(!isShowTopCategories);
  };

  const getChartContent = () => {
    if (!values || values.length === 0) return <div>No available data</div>;

    if (parsedError) {
      return (
        <div className="p-4 bg-red-50 text-red-600 rounded">
          <p className="font-semibold">Failed to render chart</p>
          <p className="text-sm">{parsedError}</p>
        </div>
      );
    }

    if (parsedSpec === null) {
      return (
        <div className="p-4 bg-yellow-50 text-yellow-700 rounded">
          <div className="flex items-center justify-between gap-4">
            <p>
              There are too many categories to display effectively. Click
              &apos;Show top 25&apos; to view the top results.
            </p>
            <button
              className="px-3 py-1 text-sm bg-yellow-100 hover:bg-yellow-200 rounded"
              onClick={onShowTopCategories}
            >
              Show top 25
            </button>
          </div>
        </div>
      );
    }

    return <div style={{ width, height }} ref={$container} />;
  };

  return (
    <div className={className} style={{ width }}>
      {getChartContent()}
    </div>
  );
}

