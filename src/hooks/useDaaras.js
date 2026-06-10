import { useState, useEffect, useCallback } from "react";
import daaraService from "../services/daaraService";

function useDaaras(filters = {}) {
  const [daaras, setDaaras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDaaras = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await daaraService.getAll(filters);
      setDaaras(data.data || data);
    } catch (err) {
      setError("Erreur lors du chargement des daaras.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filters.region, filters.search]);

  useEffect(() => {
    fetchDaaras();
  }, [fetchDaaras]);

  const getDaaraById = async (id) => {
    try {
      const data = await daaraService.getById(id);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const getBesoins = async (id) => {
    try {
      const data = await daaraService.getBesoins(id);
      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  return {
    daaras,
    loading,
    error,
    fetchDaaras,
    getDaaraById,
    getBesoins,
  };
}

export default useDaaras;
